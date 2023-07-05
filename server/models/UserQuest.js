module.exports = (sequelize, DataTypes) => {
  const UserQuest = sequelize.define(
    "UserQuest",
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  UserQuest.associate = (models) => {
    UserQuest.belongsTo(models.User, {
      foreignKey: "userId",
      as: "useruser",
      allowNull: false,
    });
    UserQuest.belongsTo(models.Quest, {
      foreignKey: "questId",
      as: "quest",
      allowNull: false,
    });
  };
  return UserQuest;
};
