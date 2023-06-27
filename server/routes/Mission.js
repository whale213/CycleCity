const express = require("express");
const router = express.Router();
const { Mission, Sequelize } = require("../models");
const yup = require("yup");

router.post("/", async (req, res) => {
  let data = req.body;
  res.json(data);
});

router.get("/", async (req, res) => {
  let data = await Mission.findAll();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let mission = await Mission.findByPk(id);

  // check id not found
  if (!mission) {
    res.sendStatus(404);
    return;
  }
  res.json(mission);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  // Check id not found
  let mission = await Mission.findByPk(id);
  if (!mission) {
    res.sendStatus(404);
    return;
  }
  let data = req.body;
  let num = await Mission.update(data, {
    where: { missionId: id },
  });
  if (num == 1) {
    res.json({
      message: "Mission was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update mission with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Mission.destroy({
    where: { missionId: id },
  });
  if (num == 1) {
    res.json({
      message: "Mission was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete mission with id ${id}.`,
    });
  }
});

module.exports = router;
