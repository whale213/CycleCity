module.exports = (sequelize, DataTypes) => {
  const Quest = sequelize.define("Quest", {
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
  });
  Quest.associate = (models) => {
    Quest.belongsTo(models.Criterias, {
      foreignKey: "criteriasId",
      as: "criterias",
      allowNull: false,
    });
  };
  return Quest;
};
