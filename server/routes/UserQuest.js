const { UserQuest, Sequelize } = require("../models");
const yup = require("yup");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body;
  let validationSchema = yup.object().shape({
    status: yup.string().max(100).trim().required(),
    userId: yup.number().integer().positive().required(),
    questId: yup.number().integer().positive().required(),
  });
  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.status = data.status.trim();

  let result = await UserMission.create(data);
  res.json(result);
});

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { status: { [Sequelize.Op.like]: `%${search}%` } },
      { userID: { [Sequelize.Op.like]: `%${search}%` } },
      { questId: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }
  let list = await UserMission.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let userQuest = await UserMission.findByPk(id);
  if (!userQuest) {
    res.sendStatus(404);
    return;
  }
  res.json(userQuest);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let userQuest = await UserMission.findByPk(id);
  if (!userQuest) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    userQuestId: yup.number().integer().positive().required(),
    status: yup.string().max(100).trim().required(),
    userId: yup.number().integer().positive().required(),
    questId: yup.number().integer().positive().required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }

  data.status = data.status.trim();

  let num = await UserMission.update(data, {
    where: { userQuestId: id },
  });
  if (num == 1) {
    res.json({
      message: "UserMission was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update userQuest with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await UserMission.destroy({
    where: { userQuestId: id },
  });
  if (num == 1) {
    res.json({
      message: "UserMission was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete userQuest with id ${id}.`,
    });
  }
});

module.exports = router;
