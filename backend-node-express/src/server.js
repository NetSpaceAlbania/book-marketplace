import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import listingsRouter from "./services/listings/index.js";
import authRouter from "./db/routes/auth.js";
import usersRouter from "./db/routes/users.js";
import {
  notFoundHandler,
  badRequestHandler,
  forbiddenHandler,
  genericServerErrorHandler,
} from "./errorHandling.js";

dotenv.config();

const server = express(); //this has to be specified BEFORE the routes, otherwise the body will be undefined
server.use(cors()); //cors connects BE with FE *** the same as app.use(cors());

server.use(express.json()); //this has to be specified BEFORE the routes, otherwise the body will be UNDEFINED

// ******************* ENDPOINTS ***************************************************
// a Router is set of endpoints that share something like a prefix (listingsRouter is going to share "/listings" as a prefix")
server.use("/listings", listingsRouter);
server.use("/auth", authRouter)
server.use("/users", usersRouter)

// *********************** ERROR MIDDLEWARES ***************************
// always to be defined after all the routes
server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(forbiddenHandler);
server.use(genericServerErrorHandler);

// mongoose getting-started.js
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("❤ DB is running succesfully")
}

console.table(listEndpoints(server));

const port = 3001;
server.listen(port, () => {
  console.log(`😎 Server is running on port ${port}`);
});

server.on("error", console.log);
