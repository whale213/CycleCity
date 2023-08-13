const express = require("express");
const router = express.Router();
const { UserPost, User } = require("../models");
const yup = require("yup");

router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        // Assuming UserPost is an array of objects with an "id" property
        const post = await UserPost.findByPk(id, {
            include: {
              model: User,
              as: "user_post_desc",
              attributes: ["name"],
            },
          });

        res.json(post);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching posts." });
    }
  });


router.get("/user/:id", async (req, res) => {
    try {
      const userId = req.params.id;

      // Assuming UserPost is an array of objects with a "userId" property
      const posts = await UserPost.findAll({
          where: {
              userId: userId
          },
          include: {
              model: User,
              as: "user_post_desc",
              attributes: ["name"],
          },
      });

      res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching posts." });
    }
  });

module.exports = router;
