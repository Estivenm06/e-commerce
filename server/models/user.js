import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db";

class User extends Model {}
User.init(
  {
    id: {
      tyep: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    phone: {
      type: DataTypes.TEXT,
    },
    address: {
      geolocalation: {
        lat: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        long: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      street: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      zipcode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "users",
  }
);

export default User;