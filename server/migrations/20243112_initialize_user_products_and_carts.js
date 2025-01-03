const { DataTypes } = require("sequelize");
const { Product, Category } = require("../models");
const axios = require("axios");
const { API } = require("../utils/config.js");

const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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
    password_hash: {
      type: DataTypes.STRING,
    }
  });
  await queryInterface.createTable("products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    category: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.JSON,
    },
  });
  await queryInterface.createTable("carts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date().getTime(),
      allowNull: false,
    },
    products: {
      type: DataTypes.JSON,
    },
  });
  try {
      const { data } = await axios.get(`${API}/products`);
      await Product.bulkCreate(data.map(({ id, ...product }) => product));
      console.log("Products successfully added to database");
  } catch (error) {
    console.log("Error adding products: ", error);
    throw error;
  }
};

const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable("users");
  await queryInterface.dropTable("products");
  await queryInterface.dropTable("carts");
  try {
    await Product.destroy({ where: {} });
    console.log("Products successfully removed from the database");
  } catch (error) {
    console.log("Error removing products", error);
    throw error;
  }
};

module.exports = { up, down };
