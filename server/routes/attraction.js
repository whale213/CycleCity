const express = require("express");
const router = express.Router();
const { Location, Attraction, Sequelize } = require("../models");
const yup = require("yup");

router.get("/", async (req, res) => {
  // search function
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { distance: { [Sequelize.Op.like]: `%${search}%` } },
      { difficulty: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }

  let list = await Attraction.findAll({
    where: condition,
    include: {
      model: Location,
      as: "location",
      attributes: ["name", "postalCode", "address", "imageFile", "latitude", "longitude"],
    },
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let attraction = await Attraction.findByPk(id, {
    include: {
      model: Location,
      as: "location",
      attributes: ["name", "postalCode", "address"],
    },
  });

  // Check id not found
  if (!attraction) {
    res.sendStatus(404);
    return;
  }
  res.json(attraction);
});

router.post("/", async (req, res) => {
  let data = req.body;

  let validationSchema = yup.object().shape({
    difficulty: yup.string().trim().min(4).required(),
    imageFile: yup.string().trim().min(8).max(100).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.difficulty = data.difficulty.trim();
  data.imageFile = data.imageFile.trim();

  let result = await Attraction.create(data);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let attraction = await Attraction.findByPk(id);
  if (!attraction) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    difficulty: yup.string().trim().min(4).required(),
    imageFile: yup.string().trim().min(8).max(100).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.difficulty = data.difficulty.trim();
  data.imageFile = data.imageFile.trim();

  let num = await Attraction.update(data, {
    where: { attractionId: id },
  });
  if (num == 1) {
    res.json({
      message: "Attraction was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update attraction with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Attraction.destroy({
    where: { attractionId: id },
  });
  if (num == 1) {
    res.json({
      message: "Attraction was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete attraction with id ${id}.`,
    });
  }
});

module.exports = router;
