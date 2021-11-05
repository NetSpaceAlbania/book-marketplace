import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// fs cool stuff to read & write on disk
const { readJSON, writeJSON, writeFile, readFile } = fs;

//*****************/ How to find the path*****************
// 1. I'll start from the current file I'm right now. (C_//.........../authors/index.js)
// import.meta.url -->>>> give us info about the current url of the current module.
// fileURLToPath converts that url into path
// const currentFilePath = fileURLToPath(import.meta.url); // C:\Users\emili\Desktop\book-marketplace-hackerspace\src\services\authors\index.js
// 2. Get the parent folder
// const parentFolder = dirname(currentFilePath);
// 3. I can concatenate the parent folder path withj authors json --> C:\Users\emili\Desktop\book-marketplace-hackerspace\src\services\authors\authors.json
// const authorsJsonPath = join(parentFolder, "authors.json");

const listingsJsonPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../data/listings.json"
);

// **********************/ How to read & write on disk **********************
export const readListings = () => readJSON(listingsJsonPath);

export const writeListings = async (listings) => {
  try {
    await writeJSON(listingsJsonPath, listings);
  } catch (error) {
    console.log(error);
  }
};
