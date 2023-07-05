module.exports = (sequelize, DataTypes) => {
  const Mission = sequelize.define(
    "Mission",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    Mission.belongsTo(models.Criterias, {
      foreignKey: "criteriaId",
      as: "criteria",
      allowNull: false,
    });
  };
  return Mission;
};
