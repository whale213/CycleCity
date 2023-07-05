module.exports = (sequelize, DataTypes) => {
  const Attraction = sequelize.define(
    "Attraction",
    {
      attractionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      distance: {
        type: DataTypes.DECIMAL(7, 3),
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true, createdAt: false }
  );

  Attraction.associate = (models) => {
    Attraction.belongsTo(models.Location, {
      foreignKey: "locationId",
      as: "location",
      allowNull: false,
    });
  };

  return Attraction;
};
