'use scric';
require('dotenv/config')
const Sequelize = require('sequelize')
const pg = require('pg')

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3001;
const SECRET = process.env.SECRET;
const API = process.env.API
const sequelize = new Sequelize(DATABASE_URL, {
    dialectModule: pg,
    dialect: "postgres",
  });

module.exports= {
    API, DATABASE_URL, PORT, SECRET, sequelize
}