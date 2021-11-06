// > GET http:localhost:3001/listings ⇒ I want to retrieve the list of all listings

// > GET http:localhost:3001/listings/123 ⇒ I want to retrieve listings 123's information

// > POST http:localhost:3001/listings (+ body) ⇒ I want to create a new listings

// > PUT http:localhost:3001/listings/123 (+body) ⇒ I want to modify listings 123

// > DELETE http:localhost:3001/listings/123⇒ I want to delete listings 123

import express from "express";
import uniqid from "uniqid";
import createHttpError from "http-errors";
import { validationResult } from "express-validator";
import { validateListing } from "../../validation/listingValidation.js";
import { readListings, writeListings } from "../../lib/fs-tools.js";

const listingsRouter = express.Router();

// ************* CREATE A NEW LISTING ******************
listingsRouter.post("/", validateListing, async (req, res, next) => {
  try {
    const errorList = validationResult(req);
    console.log("Error list: ", errorList);
    if (errorList.isEmpty()) {
      // read the the content of listings.jsons
      const listings = await readListings();
      console.log("Listings consol log: ", listings);
      // read the requests body
      const newListing = {
        id: uniqid(),
        ...req.body,
        createdAt: new Date(),
      };
      // push the new listing to the listings array
      listings.push(newListing);
      // write the new listings array to the file listings.json
      await writeListings(listings);
      // send the new listing to the client
      res.status(201).send(newListing);
    } else {
      next(createHttpError(400, { errorList }));
    }
  } catch (err) {
    console.log(err);
    next(err); // pass the error to the next middleware (error handlers imported in server.js from errorHandling.js)
  }
});

// ********* GET ALL LISTINGS ********************
listingsRouter.get("/", async (req, res, next) => {
  try {
    // read the the content of listings.jsons
    const listings = await readListings();
    // send the listings to the client
    res.status(200).send(listings);
  } catch (error) {
    console.log(error);
    next(error); // pass the error to the next middleware (error handlers imported in server.js from errorHandling.js)
  }
});

// GET A SPECIFIC LISTING
listingsRouter.get("/:id", async (req, res, next) => {
  try {
    // read the the content of listings.jsons
    const listings = await readListings();
    // find the listing with the id in the request params
    const listing = listings.find((listing) => listing.id === req.params.id);
    // if the listing is found send it to the client
    if (listing) {
      res.status(200).send(listing);
    } else {
      next(createHttpError(404, "Listing not found"));
    }
  } catch (error) {
    console.log(error);
    next(error); // pass the error to the next middleware (error handlers imported in server.js from errorHandling.js)
  }
});

// ********* UPDATE A SPECIFIC LISTING ********************
listingsRouter.put("/:id", validateListing, async (req, res, next) => {
  try {
    const errorList = validationResult(req);
    if (errorList.isEmpty()) {
      // read the the content of listings.jsons
      const listings = await readListings();
      // find the listing with the id in the request params
      const listing = listings.find((listing) => listing.id === req.params.id);
      // update the listing with the new information
      // the updatedListing is the merge of the copied object of the current listing that matches the id, with the copied object of the body request that will overwrite some part or everything of the original
      const updatedListing = {
        ...listing,
        ...req.body,
        updatedAt: new Date(),
      };
      // the remaining listings - all the listings apart the one we want to modify, the one that matches the id
      const remainingListings = listings.filter(
        (listing) => listing.id !== req.params.id
      );
      // push the updated listing to the listings array
      remainingListings.push(updatedListing);
    }
    // save the new updated listings array to the file listings.json
    await writeListings(remainingListings);
    // send the updated listing to the client
    res.status(200).send(updatedListing);
  } catch (error) {
    console.log(error);
    next(error); // pass the error to the next middleware (error handlers imported in server.js from errorHandling.js)
  }
});

export default listingsRouter;
