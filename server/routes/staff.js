const express = require("express");
const router = express.Router();
const { Staff, Sequelize } = require("../models");
const yup = require("yup");

router.get("/", async (req, res) => {
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { name: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }

  let list = await Staff.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let staff = await Staff.findByPk(id);

  // Check id not found
  if (!staff) {
    res.sendStatus(404);
    return;
  }
  res.json(staff);
});

router.post("/", async (req, res) => {
  let data = req.body;

  let validationSchema = yup.object().shape({
    name: yup.string().trim().min(3).required(),
    email: yup.string().trim().email().max(50).required(),
    phoneNumber: yup
      .number()
      .integer()
      .min(80000000, "Phone number must be exactly 8 digits")
      .max(99999999, "Phone number must be 8 digits only")
      .required(),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol."
      )
      .required("Please enter a password."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    bio: yup.string().trim().min(6).max(1000).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.email = data.email.trim();
  data.password = data.password.trim();

  let result = await Staff.create(data);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let staff = await Staff.findByPk(id);
  if (!staff) {
    res.sendStatus(404);
    return;
  }

  let data = req.body;

  let validationSchema = yup.object().shape({
    name: yup.string().trim().min(3).required(),
    email: yup.string().trim().email().max(50).required(),
    phoneNumber: yup
      .number()
      .integer()
      .min(80000000, "Phone number must be exactly 8 digits")
      .max(99999999, "Phone number must be 8 digits only")
      .required(),
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters.")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol."
      )
      .required("Please enter a password."),
    bio: yup.string().trim().min(6).max(1000).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.email = data.email.trim();
  data.password = data.password.trim();

  let num = await Staff.update(data, {
    where: { staffId: id },
  });
  if (num == 1) {
    res.json({
      message: "Staff was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update staff with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await Staff.destroy({
    where: { staffId: id },
  });
  if (num == 1) {
    res.json({
      message: "Staff was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete staff with id ${id}.`,
    });
  }
});

module.exports = router;
