const { UserQuest, Sequelize } = require("../models");
const yup = require("yup");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body;
  // Validate request body
  let validationSchema = yup.object().shape({
    title: yup.string().trim().min(3).max(100).required(),
    description: yup.string().trim().min(3).max(500).required(),
  });
  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.title = data.title.trim();
  data.description = data.description.trim();
  let result = await UserQuest.create(data);
  res.json(result);
});

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { title: { [Sequelize.Op.like]: `%${search}%` } },
      { description: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }
  let list = await UserQuest.findAll({
    where: condition,
    order: [["createdAt", "DESC"]],
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let userQuest = await UserQuest.findByPk(id);
  // Check id not found
  if (!userQuest) {
    res.sendStatus(404);
    return;
  }
  res.json(userQuest);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  // Check id not found
  let userQuest = await UserQuest.findByPk(id);
  if (!userQuest) {
    res.sendStatus(404);
    return;
  }
  let data = req.body;
  let num = await UserQuest.update(data, {
    where: { userQuestId: id },
  });
  if (num == 1) {
    res.json({
      message: "UserQuest was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update userQuest with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await UserQuest.destroy({
    where: { userQuestId: id },
  });
  if (num == 1) {
    res.json({
      message: "UserQuest was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete userQuest with id ${id}.`,
    });
  }
});

module.exports = router;
