const express = require("express");
const router = express.Router();
const { Peloton, Sequelize } = require("../models");
const yup = require("yup");

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { name: { [Sequelize.Op.like]: `%${search}%` } },
      { bio: { [Sequelize.Op.like]: `%${search}%` } },
      { pelotonId: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }

  let list = await Peloton.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let peloton = await Peloton.findByPk(id);

  // Check id not found
  if (!peloton) {
    res.sendStatus(404);
    return;
  }
  res.json(peloton);
});

router.post("/", async (req, res) => {
  let data = req.body;

  let validationSchema = yup.object().shape({
    pelotonId: yup.number().integer().positive().min(1).required(),
    name: yup.string().min(3).trim().required(),
    type: yup.string().trim().required(),
    owner: yup.number().integer().required(),
    bio: yup.string().min(10).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.type = data.type.trim();
  data.bio = data.bio.trim();

  let result = await Peloton.create(data);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let peloton = await Peloton.findByPk(id);
  if (!peloton) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    pelotonId: yup.number().integer().positive().min(1).required(),
    name: yup.string().min(3).trim().required(),
    type: yup.string().trim().required(),
    owner: yup.number().integer().required(),
    bio: yup.string().min(10).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.type = data.type.trim();
  data.bio = data.bio.trim();

  let num = await Peloton.update(data, {
    where: { pelotonId: id },
  });
  if (num == 1) {
    res.json({
      message: "Peloton was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update peloton with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Peloton.destroy({
    where: { pelotonId: id },
  });
  if (num == 1) {
    res.json({
      message: "Peloton was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete peloton with id ${id}.`,
    });
  }
});

module.exports = router;
