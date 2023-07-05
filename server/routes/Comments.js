const express = require('express')
const { User, Comments } = require('../models');
const yup = require("yup");
const router = express.Router();

router.post("/", async (req, res) => {
     // Extract data from the request body
     let data = req.body;

     let validationSchema = yup.object().shape({
         comment: yup.string().trim().min(3).required()
     });

    try {
        await validationSchema.validate(data, { abortEarly: false, strict: true });
      } 
      catch (err) {
        console.error(err);
        res.status(400).json({ errors: err.errors });
        return;
      }
      data.comment = data.comment.trim();



      let newComment = await Comments.create(data);
      res.json(newComment);
      

});


router.get("/:id", async (req, res) => {
    try {
        // Fetch all users from the database
        let id = req.params.id;
        
        const comments = await Comments.findAll({
          where: { postID: id },
          attributes: { exclude: ['userId'] }, // Exclude userId column from Comments model
          include: [
            {
              model: User,
              as: "user_comment_desc",
              attributes: ['userId', 'name', 'profileImage'],
            },
          ],
          order: [['createdAt', 'DESC']],
        });
      
        res.json(comments);

      } catch (error) {
        // Handle any errors that occurred during the database query
        res.status(500).json({ error: 'An error occurred while fetching comments.' });
      }

});

router.delete("/:id", async (req, res) => {

    let id = req.params.id;
    // Check id not found
    let comment = await Comments.findByPk(id);
    if (!comment) {
        res.sendStatus(404);
        return;
    }


    // let userId = req.user.id;
    // if (tutorial.userId != userId) {
    //     res.sendStatus(403);
    //     return;
    // }

    let num = await Comments.destroy({
        where: { commentID: id }
    })
    if (num == 1) {
        res.json({
            message: "Comment was deleted successfully."
        });
    }
});
module.exports = router;