require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
// default node module for path
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

// middleware for adding secruity to the express application by providing secure headers
app.use(helmet());
// middleware to allow express to easily process json
app.use(express.json());
// middleware for adding logging for the server to mointor and log request and responses
app.use(morgan("dev"));

// checking the node_env
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// connection to database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live ");
});

// handling the index route
app.get("/", (req, res) => {
  // serving the complied react application
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const productRoute = require("./routes/product");
app.use("/api/products", productRoute);

const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);

// handling endpoints that don't exist
app.get("*", (req, res) => {
  res.status(404).send("Nothing exist here bad request");
});

// listening to the env variable port if it exist if not port 4000
app.listen(port, () => console.log(`Listening on port ${port}`));
