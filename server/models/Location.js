module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      locationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageFile: {
        type: DataTypes.STRING,
      },
      longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
      },
      latitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
      },
    },
    { timestamps: true, createdAt: false }
  );

  return Location;
};
