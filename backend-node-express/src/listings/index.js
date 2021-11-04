// > GET http:localhost:3001/listings ⇒ I want to retrieve the list of all listings

// > GET http:localhost:3001/listings/123 ⇒ I want to retrieve listings 123's information

// > POST http:localhost:3001/listings (+ body) ⇒ I want to create a new listings

// > PUT http:localhost:3001/listings/123 (+body) ⇒ I want to modify listings 123

// > DELETE http:localhost:3001/listings/123⇒ I want to delete listings 123

import express from "express";
import uniqid from "uniqid";
import createHttpError from "http-errors";
// import { readListings, writeListings } from "../lib/fs-tools.js";

const listingsRouter = express.Router();

// ************* GET ALL LISTINGS ******************
listingsRouter.post("/", (req, res, next) => {
  
});

export default listingsRouter;