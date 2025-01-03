const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/config.js");

class Active extends Model {}

Active.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { sequelize, underscored: true, timestamps: false, tableName: "actives" }
);

module.exports = Active;
