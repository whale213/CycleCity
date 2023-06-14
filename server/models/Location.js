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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DECIMAL(15, 13),
        allowNull: false,
      },
      latitude: {
        type: DataTypes.DECIMAL(15, 13),
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return Location;
};

/* 
locationId
name
postalCode
address
longitude
latitude
*/
