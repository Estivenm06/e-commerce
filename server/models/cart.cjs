'use scric';

const User = require("./user.cjs");
const { sequelize } = require("../utils/config.cjs");
const { Model, DataTypes } = require("sequelize");

class Cart extends Model {}
Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date().getTime(),
      allowNull: false,
    },
    products: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "carts",
  }
);

module.exports = Cart;
