module.exports = (sequelize, DataTypes) => {
  const UserMission = sequelize.define("UserMission", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return UserMission;
};
