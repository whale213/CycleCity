module.exports = (sequelize, DataTypes) => {
  const UserQuest = sequelize.define("UserQuest", {
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
  return UserQuest;
};
