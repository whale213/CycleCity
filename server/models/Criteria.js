module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define(
    "Criteria",
    {
      criteriaId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Criteria;
};
