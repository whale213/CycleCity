module.exports = (sequelize, DataTypes) => {
  const UserMission = sequelize.define(
    "UserMission",
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  UserMission.associate = (models) => {
    UserMission.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "useruser",
      allowNull: false,
    });
    UserMission.belongsTo(models.Mission, {
      foreignKey: "missionId",
      as: "mission",
      allowNull: false,
    });
  };
  return UserMission;
};
