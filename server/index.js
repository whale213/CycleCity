const express = require("express");
const cors = require("cors");
app.use(express.json());

const app = express();
app.use(cors());
// Simple Route
app.get("/", (req, res) => {
  res.send("CycleCity server is running...");
});
require("dotenv").config();

let port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`⚡ Sever running on http://localhost:${port}`);
});
