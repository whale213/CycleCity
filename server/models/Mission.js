module.exports = (sequelize, DataTypes) => {
  const Mission = sequelize.define(
    "Mission",
    {
      missionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      exp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  Mission.associate = (models) => {
    Mission.belongsTo(models.Criteria, {
      foreignKey: "criteriaId",
      as: "criteria",
      allowNull: false,
    });
  };
  return Mission;
};
