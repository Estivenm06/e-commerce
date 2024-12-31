const User = require("./user.js");
const Product = require("./product.js");
const { sequelize } = require("../utils/db.js");
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
    timestamps: true,
    modelName: "carts",
  }
);

module.exports = Cart;
