const express = require("express");
const router = express.Router();
const { UserPost, sequelize, User, Followers } = require("../models");
const { Op, literal } = require("sequelize");
const yup = require("yup");

router.post("/", async (req, res) => {
  let data = req.body;

  let validationSchema = yup.object().shape({
    caption: yup.string().trim().min(3).max(100).required(),
    post: yup.string().trim().min(3).max(500).required(),
  });

  try {
    await validationSchema.validate(data, { abortEarly: false, strict: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ errors: err.errors });
    return;
  }
  data.caption = data.caption.trim();
  data.post = data.post.trim();

  let newUser = await UserPost.create(data);
  res.json(newUser);
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    const queryOptions = {
      attributes: ["postID", "caption", "post", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["userId", "name", "profileImage"],
          as: "user_post_desc",
          required: true,
          where: {
            [Op.or]: [
              { userId: id },
              {
                userId: {
                  [Op.in]: literal(
                    `(SELECT followeruserID FROM Followers WHERE followeduserID = ${id})`
                  ),
                },
              },
            ],
          },
        },
        // {
        //     model: Followers,
        //     as: "followeruserID_post_desc",
        //     attributes: [],
        // },
      ],

      order: [["createdAt", "DESC"]],
    };

    const posts = await UserPost.findAll(queryOptions);

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching posts." });
  }
});

router.delete("/:id", async (req, res) => {

    let id = req.params.id;
    // Check id not found
    let post = await UserPost.findByPk(id);
    if (!post) {
        res.sendStatus(404);
        return;
    }


    // let userId = req.user.id;
    // if (tutorial.userId != userId) {
    //     res.sendStatus(403);
    //     return;
    // }

    let num = await UserPost.destroy({
        where: { postID: id }
    })
    if (num == 1) {
        res.json({
            message: "Post was deleted successfully."
        });
    }
});

module.exports = router;
