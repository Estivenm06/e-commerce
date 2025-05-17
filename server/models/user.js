import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../utils/config.js';

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

export default User;