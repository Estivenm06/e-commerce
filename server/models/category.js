import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db";

class Category extends Model {}
Category.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
  },
  { sequelize, underscored: true, timestamps: false, modelName: "categories" }
);

export default Category;
