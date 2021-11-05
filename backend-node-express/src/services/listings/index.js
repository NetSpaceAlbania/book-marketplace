// > GET http:localhost:3001/listings ⇒ I want to retrieve the list of all listings

// > GET http:localhost:3001/listings/123 ⇒ I want to retrieve listings 123's information

// > POST http:localhost:3001/listings (+ body) ⇒ I want to create a new listings

// > PUT http:localhost:3001/listings/123 (+body) ⇒ I want to modify listings 123

// > DELETE http:localhost:3001/listings/123⇒ I want to delete listings 123

import express from "express";
import uniqid from "uniqid";
import createHttpError from "http-errors";
import { readListings, writeListings } from "../../lib/fs-tools.js";

const listingsRouter = express.Router();

// ************* CREATE A NEW LISTING ******************
listingsRouter.post("/", (req, res, next) => {
    const { body } = req;
    const { title, description, price, image } = body;
    const listing = {
      id: uniqid(),
      title,
      description,
      price,
      image
    };
    writeListings(listing);
    res.send(listing);
  });

  // ********* GET LISTING BY ID ********************
  listingsRouter.get("/:id", async (req, res, next) => {
    try {
      // save request params id in a variable
      const paramsId = req.params.id;
      // 1. Read the content of the listings.json file
      const listings = await readListings();
  
      // find the listing with the id requested
      const listing = listings.find((listing) => listing._id === paramsId);
  
      if (listing) {
        res.status(200).send(listing);
      } else {
        next(createHttpError(404, `listing with id ${paramsId} not found`));
      }
    } catch (error) {
      console.log(error);
    }
  });
export default listingsRouter;