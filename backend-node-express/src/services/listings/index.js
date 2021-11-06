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
      // read the the content of listings.jsonrs
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
    next(err);
  }
});

// ********* GET ALL LISTINGS ********************
listingsRouter.get("/", async (req, res, next) => {
  try {
    const listings = await readListings();
    res.status(200).send(listings);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default listingsRouter;
