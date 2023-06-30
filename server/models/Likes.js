module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes", {
      likeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }
    });
  
    Likes.associate = (models) => {
      Likes.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user_likes",
        allowNull: false,
      });
  
      Likes.belongsTo(models.UserPost, {
        foreignKey: "postID",
        as: "post_likes",
        allowNull: false,
      });
    };
  
  
    return Likes;
  };