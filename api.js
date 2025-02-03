const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const route = require("./routes");

const app = express();

// Middleware
app.use(cors());

// Use morgan for logging HTTP requests (only in development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Route
app.get("/api/v1/classify-number", route);
