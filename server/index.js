const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
// Simple Route
app.get("/", (req, res) => {
  res.send("CycleCity server is running...");
});

// synchronizes data models with db tables
const db = require("./models");
db.sequelize
  .sync({ alter: true })
  .then(() => {
    let port = process.env.APP_PORT;
    app.listen(port, () => {
      console.log(`⚡ Sever running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
