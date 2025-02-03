const route = require("./routes");

const cors = require("cors");
const express = require("express");
//const morgan = require("morgan");

require("dotenv").config();
const app = express();
// Middleware
app.use(cors());

const PORT = process.env.PORT || 3000;

// Route
app.get("/api/v1/classify-number", route);
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
