module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define("League", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mission: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return League;
};
