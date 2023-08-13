module.exports = (sequelize, DataTypes) => {
    const Followers = sequelize.define("Followers", {
      followerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }
    });
  
    Followers.associate = (models) => {
      Followers.belongsTo(models.User, {
        foreignKey: "followeruserID",
        as: "followeruserID_desc",
        allowNull: false,
      });
  
      Followers.belongsTo(models.User, {
        foreignKey: "followeduserID",
        as: "followeduserID_desc",
        allowNull: false,
      });
  
    };
  
  
  
    return Followers;
  };