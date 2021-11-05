// > GET http:localhost:3001/listings ⇒ I want to retrieve the list of all listings

// > GET http:localhost:3001/listings/123 ⇒ I want to retrieve listings 123's information

// > POST http:localhost:3001/listings (+ body) ⇒ I want to create a new listings

// > PUT http:localhost:3001/listings/123 (+body) ⇒ I want to modify listings 123

// > DELETE http:localhost:3001/listings/123⇒ I want to delete listings 123

import express from "express";
import uniqid from "uniqid";
import createHttpError from "http-errors";
import { validationResult } from "express-validator";
import { validateListing } from "../../validation/validation.js";
import { readListings, writeListings } from "../../lib/fs-tools.js";

const listingsRouter = express.Router();

// ************* CREATE A NEW LISTING ******************
listingsRouter.post("/", (req, res, next) => {
  try {
    const errorList = validationResult(req);
    if (errorList.isEmpty()) {
      // read the the content of listings.json
      const listings = readListings();
      // read the requests body
      const newListing = {
        id: uniqid(),
        ...req.body,
        createdAt: new Date(),
      };
      // push the new listing to the listings array
      listings.push(newListing);
      // write the new listings array to the file listings.json
       writeListings(listings);
      // send the new listing to the client
      res.status(201).send(newListing);
    } else {
      next(createError(400, { errorList }));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// ********* GET LISTING BY ID ********************
// listingsRouter.get("/:id", async (req, res, next) => {});

export default listingsRouter;
