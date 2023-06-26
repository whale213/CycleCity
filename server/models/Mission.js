module.exports = (sequelize, DataTypes) => {
  const Mission = sequelize.define("Mission", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    criteria: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Mission.associate = (models) => {
    Mission.belongsTo(models.League, {
      foreignKey: "leagueId",
      as: "league",
      allowNull: false,
    });
  };
  return Mission;
};
