import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db";
import User from "./user";
import Product from "./product";

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
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    products: [
      {
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: Product, key: "id" },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
    ],
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "carts",
  }
);

export default Cart;
