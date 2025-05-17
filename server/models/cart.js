import { Model, DataTypes } from "sequelize";
import User from "./user.js";
import {sequelize} from '../utils/config.js';

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

export default Cart
