module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define(
    "League",
    {
      leagueId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      explimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageFile: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
  return League;
};
