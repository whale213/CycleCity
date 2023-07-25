const express = require('express')
const { UserPost, Likes } = require('../models');

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Extract data from the request body
        let { userId, postID } = req.body;
    
        // Create a new user in the database
        let newLike = await Likes.create({ userId, postID });
    
        // Send the newly created user as the response
        res.json(newLike);
      } catch (error) {
        // Handle any errors that occurred during the database query
        res.status(500).json({ error: 'An error occurred while creating the user.' });
      }
});

router.get("/:id", async (req, res) => {
    try {
        // Fetch all users from the database
        let id = req.params.id;
        let post_likes = await Likes.findAll({
          where: { postID: id },
          include: { model: UserPost, as: "post_likes" }
        })
        
        res.json(post_likes);
      } catch (error) {
        // Handle any errors that occurred during the database query
        res.status(500).json({ error: 'An error occurred while fetching likes.' });
      }
});

router.delete("/:id", async (req, res) => {

    let id = req.params.id;
    // Check id not found
    let like = await Likes.findByPk(id);
    if (!like) {
        res.sendStatus(404);
        return;
    }


    // let userId = req.user.id;
    // if (tutorial.userId != userId) {
    //     res.sendStatus(403);
    //     return;
    // }

    let num = await Likes.destroy({
        where: { likeID: id }
    })
    if (num == 1) {
        res.json({
            message: "Unliked successfully."
        });
    }
});

module.exports = router;
