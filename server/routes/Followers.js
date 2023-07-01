const express = require('express')
const { User, Followers } = require('../models');

const router = express.Router();

router.post("/", async (req, res) => {
    // try {
        // Extract data from the request body
        let { followeruserID, followeduserID } = req.body;
    
        // Create a new user in the database
        let newFollower = await Followers.create({ followeruserID, followeduserID });
    
        // Send the newly created user as the response
        res.json(newFollower);  
      // } catch (error) {
      //   // Handle any errors that occurred during the database query
      //   res.status(500).json({ error: 'An error occurred while creating the user.' });
      // }
});

router.get("/:id", async (req, res) => {
    try {
        // Fetch all users from the database
        let id = req.params.id;
        
        let followers = await Followers.findAll({
          where: { followeduserID: id },
          include: { model: User, as: "followeduserID_desc", attributes: ['userId', 'name']}
        })

        
        res.json(followers);
      } catch (error) {
        // Handle any errors that occurred during the database query
        res.status(500).json({ error: 'An error occurred while fetching followes.' });
      }
});

router.delete("/:id", async (req, res) => {

    let id = req.params.id;
    // Check id not found
    let unfollow = await Followers.findByPk(id);
    if (!unfollow) {
        res.sendStatus(404);
        return;
    }


    // let userId = req.user.id;
    // if (tutorial.userId != userId) {
    //     res.sendStatus(403);
    //     return;
    // }

    let num = await Followers.destroy({
        where: { followerID: id }
    })
    if (num == 1) {
        res.json({
            message: "Unfollowed successfully."
        });
    }
});

module.exports = router;
