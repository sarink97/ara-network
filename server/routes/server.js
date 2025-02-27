const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Backend is running!" });
});

// Mount API routes
const apiRoutes = require("./routes"); // Ensure this file exists
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

