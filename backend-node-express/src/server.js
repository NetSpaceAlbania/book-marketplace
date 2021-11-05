import express from "express";
import listEndpoints from "express-list-endpoints";
import listingsRouter from "./listings/index.js";

const server = express();

server.use(express.json()); //this has to be specified BEFORE the routes, otherwise the body will be UNDEFINED

// ******************* ENDPOINTS ***************************************************
// a Router is set of endpoints that share something like a prefix (listingsRouter is going to share "/listings" as a prefix")
server.use("/listings", listingsRouter);

console.table(listEndpoints(server));

const port = 3001;

server.listen(port, () => {
  console.log(`😎 Server is running on port ${port}`);
});

server.on("error", console.log);
