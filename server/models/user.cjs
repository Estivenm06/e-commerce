'use scric';

const { Model, DataTypes } = require("sequelize");
const {sequelize} = require('../utils/config.cjs')

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    },
    name: {
      type: DataTypes.JSON,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.JSON,
    },
    passwordHash: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "users",
  }
);

module.exports = User;
