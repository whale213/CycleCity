module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
      commentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
  
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Comments.associate = (models) => {
      Comments.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user_comment_desc",
        allowNull: false,
      });
      
      Comments.belongsTo(models.UserPost, {
        foreignKey: "postID",
        as: "post_comment_desc",
        allowNull: false,
      });
    };
  
  
    return Comments;
  };