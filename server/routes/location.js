const express = require("express");
const router = express.Router();
const { Location, Sequelize } = require("../models");

router.get("/", async (req, res) => {
  let list = await Location.findAll();
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let location = await Location.findByPk(id);
  res.json(location);
});

router.post("/");

module.exports = router;
