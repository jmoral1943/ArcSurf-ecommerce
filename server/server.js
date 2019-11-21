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
if (process.env.NODE_ENV !== "production") {
  // middleware for adding logging for the server to mointor and log request and responses
  app.use(morgan("dev"));
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

const userRoute = require("./routes/user");
app.use("/api/user", userRoute);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// listening to the env variable port if it exist if not port 4000
app.listen(port, () => console.log(`Listening on port ${port}`));
