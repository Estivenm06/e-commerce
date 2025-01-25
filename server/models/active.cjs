'use scric';

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/config.cjs");

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
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, underscored: true, timestamps: false, tableName: "actives" }
);

module.exports = Active;
