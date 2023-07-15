const express = require("express");
const router = express.Router();
const { Location, Sequelize } = require("../models");
const yup = require("yup");

router.get("/", async (req, res) => {
  // search function
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { name: { [Sequelize.Op.like]: `%${search}%` } },
      { postalCode: { [Sequelize.Op.like]: `%${search}%` } },
      { address: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }

  let list = await Location.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let location = await Location.findByPk(id);

  // Check id not found
  if (!location) {
    res.sendStatus(404);
    return;
  }
  res.json(location);
});

router.post("/", async (req, res) => {
  let data = req.body;

  let validationSchema = yup.object().shape({
    name: yup.string().trim().min(3).required(),
    postalCode: yup
      .string()
      .required()
      .matches(/^[0-9]+$/)
      .min(6)
      .max(6),
    address: yup.string().trim().min(6).max(100).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.postalCode = data.postalCode.trim();
  data.address = data.address.trim();

  let result = await Location.create(data);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let location = await Location.findByPk(id);
  if (!location) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    name: yup.string().trim().min(6).required(),
    postalCode: yup.string().min(6).required(),
    address: yup.string().trim().min(6).max(100).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.address = data.address.trim();

  let num = await Location.update(data, {
    where: { locationId: id },
  });
  if (num == 1) {
    res.json({
      message: "Location was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update location with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Location.destroy({
    where: { locationId: id },
  });
  if (num == 1) {
    res.json({
      message: "Location was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete location with id ${id}.`,
    });
  }
});

module.exports = router;
