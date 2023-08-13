module.exports = (sequelize, DataTypes) => {
  const UserMission = sequelize.define(
    "UserMission",
    {
      userMissionId: {
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
  UserMission.associate = (models) => {
    UserMission.belongsTo(models.Mission, {
      foreignKey: "missionId",
      as: "mission",
      allowNull: false,
    });
    UserMission.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      allowNull: false,
    });
  };
  return UserMission;
};
