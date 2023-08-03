const { Quest, Sequelize } = require("../models");
const yup = require("yup");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body;
  let validationSchema = yup.object().shape({
    name: yup.string().max(100).trim().required(),
    exp: yup.number().integer().positive().min(10).max(150).required(),
    criteriaId: yup.number().integer().positive().required(),
  });
  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.name = data.name.trim();

  let result = await Quest.create(data);
  res.json(result);
});

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { name: { [Sequelize.Op.like]: `%${search}%` } },
      { exp: { [Sequelize.Op.like]: `%${search}%` } },
      { criteriaId: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }
  let list = await Quest.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let quest = await Quest.findByPk(id);
  if (!quest) {
    res.sendStatus(404);
    return;
  }
  res.json(quest);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let quest = await Quest.findByPk(id);
  if (!quest) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    name: yup.string().max(100).trim().required(),
    exp: yup.number().integer().positive().min(10).max(150).required(),
    criteriaId: yup.number().integer().positive().required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.name = data.name.trim();

  let num = await Quest.update(data, {
    where: { questId: id },
  });
  if (num == 1) {
    res.json({
      message: "Quest was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update quest with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Quest.destroy({
    where: { questId: id },
  });
  if (num == 1) {
    res.json({
      message: "Quest was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete quest with id ${id}.`,
    });
  }
});

module.exports = router;
