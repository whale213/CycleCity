module.exports = (sequelize, DataTypes) => {
    const UserPost = sequelize.define("UserPost", {
      postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      caption: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      post: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    });
  
    UserPost.associate = (models) => {
      UserPost.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user_post_desc",
        allowNull: false,
      });
  
    //   UserPost.belongsTo(models.Followers, {
    //     foreignKey: "followeruserID",
    //     as: "followeruserID_post_desc",
    //     allowNull: false,
    //   });
    };
  
    return UserPost;
  };