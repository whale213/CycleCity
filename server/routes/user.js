const express = require("express");
const router = express.Router();
const { User, Sequelize } = require("../models");
const bcrypt = require("bcrypt");
const yup = require("yup");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/auth");
require("dotenv").config();

router.get("/", async (req, res) => {
  //search
  let condition = {};
  let search = req.query.search;
  if (search) {
    condition[Sequelize.Op.or] = [
      { name: { [Sequelize.Op.like]: `%${search}%` } },
      { email: { [Sequelize.Op.like]: `%${search}%` } },
      { phoneNumber: { [Sequelize.Op.like]: `%${search}%` } },
    ];
  }

  let list = await User.findAll({
    where: condition,
  });
  res.json(list);
});

router.get("/auth", validateToken, (req, res) => {
  let userInfo = {
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
    phoneNumber: req.user.phoneNumber,
    bio: req.user.bio,
    rank: req.user.rank,
    // exp: req.user.exp,
    profileImage: req.user.profileImage,
  };
  res.json({
    user: userInfo,
  });
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let user = await User.findByPk(id);

  // Check id not found
  if (!user) {
    res.sendStatus(404);
    return;
  }
  res.json(user);
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
      .max(200)
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
    await validationSchema.validate(data, { abortEarly: false });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.name = data.name.trim();
  data.email = data.email.trim();
  data.password = data.password.trim();
  data.role = "User";
  data.exp = 0;
  data.profileImage = "null";
  data.isVerified = true;
  data.lastLoginTime = "2023-01-25T16:50:00Z";
  data.rank = "Wood";

  // Check email
  let user = await User.findOne({
    where: { email: data.email },
  });
  if (user) {
    res
      .status(400)
      .json({ message: "An account with this email already exists." });
    return;
  }

  // Hash passowrd
  data.password = await bcrypt.hash(data.password, 10);

  let result = await User.create(data);
  res.json(result);
});

router.post("/login", async (req, res) => {
  let data = req.body;

  // Trim string values
  data.email = data.email.trim().toLowerCase();
  data.password = data.password.trim();

  // Check email and password
  let errorMsg = "Incorrect email or password.";
  let user = await User.findOne({
    where: { email: data.email },
  });
  if (!user) {
    res.status(400).json({ message: errorMsg });
    return;
  }
  let match = await bcrypt.compare(data.password, user.password);
  if (!match) {
    res.status(400).json({ message: errorMsg });
    return;
  }

  // Return user info
  let userInfo = {
    id: user.userId,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    bio: user.bio,
    rank: user.rank,
    // exp: 100,
    profileImage: user.profileImage,
  };

  let accessToken = sign(userInfo, process.env.APP_SECRET);
  res.json({
    accessToken: accessToken,
    user: userInfo,
  });
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;

  // Check id not found
  let user = await User.findByPk(id);
  if (!user) {
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
      .max(200)
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

  let num = await User.update(data, {
    where: { userId: id },
  });
  if (num == 1) {
    res.json({
      message: "User was updated successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot update user with id ${id}.`,
    });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let num = await User.destroy({
    where: { userId: id },
  });
  if (num == 1) {
    res.json({
      message: "User was deleted successfully.",
    });
  } else {
    res.status(400).json({
      message: `Cannot delete user with id ${id}.`,
    });
  }
});

module.exports = router;
