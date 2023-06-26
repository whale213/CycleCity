const express = require("express");
const router = express.Router();
const { League, Sequelize } = require("../models");
const yup = require("yup");

router.post("/", async (req, res) => {
  let data = req.body;
  let result = await League.create(data);
  res.json(result);
});

router.get("/", async (req, res) => {
  let list = await League.findAll();
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let league = await League.findByPk(id);

  // Check id not found
  if (!league) {
    res.sendStatus(404);
    return;
  }
  res.json(league);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  // Check id not found
  let league = await League.findByPk(id);
  if (!league) {
    res.sendStatus(404);
    return;
  }
  let data = req.body;
  let num = await League.update(data, {
    where: { leagueId: id },
  });
  if (num == 1) {
    res.json({
      message: "League was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update league with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await League.destroy({
    where: { leagueId: id },
  });
  if (num == 1) {
    res.json({
      message: "League was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete league with id ${id}.`,
    });
  }
});

module.exports = router;
