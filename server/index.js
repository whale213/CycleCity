const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();

app.use(express.json());
app.use(cors());
// Simple Route
app.get("/", (req, res) => {
  res.send("CycleCity server is running...");
});
require("dotenv").config();

// synchronizes data models with db tables
db.sequelize.sync({ alter: true }).then(() => {
  let port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log(`⚡ Sever running on http://localhost:${port}`);
  });
});
