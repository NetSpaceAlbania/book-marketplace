import fs from "fs-extra"; // will enable to read or write the json file at the particular path
import { fileURLToPath } from "url"; // it's core module (no need to install) to convert the current url from import.meta.url to current file path
import { dirname, join } from "path"; // core modules(no need to install). dirname will localize the directory name, join will join directory with json file name

import { v2 as cloudinary } from "cloudinary"; // cloudinary module (needs to install)
import { CloudinaryStorage } from "multer-storage-cloudinary"; // cloudinary module (needs to install)

// fs cool stuff to read & write on disk
const {
  readJSON,
  writeJSON,
  writeFile,
  readFile,
  remove,
  createReadStream,
  createWriteStream,
} = fs;

//*****************/ How to find the path*****************
// 1. I'll start from the current file I'm right now. (C_//.........../authors/index.js)
// import.meta.url -->>>> give us info about the current url of the current module.
// fileURLToPath converts that url into path
// const currentFilePath = fileURLToPath(import.meta.url); // C:\Users\emili\Desktop\book-marketplace-hackerspace\src\services\authors\index.js
// 2. Get the parent folder
// const parentFolder = dirname(currentFilePath);
// 3. I can concatenate the parent folder path withj authors json --> C:\Users\emili\Desktop\book-marketplace-hackerspace\src\services\authors\authors.json
// const authorsJsonPath = join(parentFolder, "authors.json");

// PATHS
const listingsJsonPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../data/json/listings.json"
);

export const imagesFolderPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../data/images"
);

// **********************/ How to read & write on disk **********************

// ********************** LISTINGS **********************
export const readListings = () => readJSON(listingsJsonPath);
export const writeListings = (content) => writeJSON(listingsJsonPath, content);
export const getListingsReadableStream = () =>
  createReadStream(listingsJsonPath);

// ********************** IMAGES **********************
// FS METHOD
// SAVE IMAGE
export const saveImage = (imageName, content) =>
  writeFile(join(imagesFolderPath, imageName), content); // content is buffer
// REMOVE IMAGE
export const removeImage = (imageName) =>
  remove(join(imagesFolderPath, imageName));
// CLOUDINARY METHOD
export const saveImageClodinary = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "book-marketplace-hackerspace/images",
    allowedFormats: ["jpg", "png"],
    // transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});
