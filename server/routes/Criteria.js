const { Criteria, Sequelize } = require("../models");
const yup = require("yup");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body;
  let validationSchema = yup.object().shape({
    type: yup.string().max(50).trim().required(),
    value: yup.string().min(10).max(50).required(),
  });
  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.type = data.type.trim();
  data.value = data.value.trim();
  let result = await Criteria.create(data);
  res.json(result);
});

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { type: { [Sequelize.Op.like]: `%${search}%` } },
      { value: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }
  let list = await Criteria.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let criteria = await Criteria.findByPk(id);
  if (!criteria) {
    res.sendStatus(404);
    return;
  }
  res.json(criteria);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let criteria = await Criteria.findByPk(id);
  if (!criteria) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    criteriaId: yup.number().integer().positive().min(1).required(),
    type: yup.string().max(50).trim().required(),
    value: yup.string().min(10).max(50).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.type = data.type.trim();
  data.value = data.value.trim();

  let num = await Criteria.update(data, {
    where: { criteriaId: id },
  });
  if (num == 1) {
    res.json({
      message: "Criteria was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update criteria with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Criteria.destroy({
    where: { criteriaId: id },
  });
  if (num == 1) {
    res.json({
      message: "Criteria was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete criteria with id ${id}.`,
    });
  }
});

module.exports = router;
