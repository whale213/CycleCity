module.exports = (sequelize, DataTypes) => {
  const Quest = sequelize.define(
    "Quest",
    {
      questId: {
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
  Quest.associate = (models) => {
    Quest.belongsTo(models.Criteria, {
      foreignKey: "criteriaId",
      as: "criteria",
      allowNull: false,
    });
  };
  return Quest;
};
