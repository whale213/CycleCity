module.exports = (sequelize, DataTypes) => {
  const UserQuest = sequelize.define(
    "UserQuest",
    {
      userQuestId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  UserQuest.associate = (models) => {
    UserQuest.belongsTo(models.Quest, {
      foreignKey: "questId",
      as: "quest",
      allowNull: false,
    });
    UserQuest.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      allowNull: false,
    });
  };
  return UserQuest;
};
