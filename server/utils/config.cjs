'use scric';
require('dotenv').config()
const Sequelize = require('sequelize')
const pg = require('pg');

const PORT = process.env.PORT || 3001;
const SECRET = process.env.SECRET;
const API = process.env.API
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres', // Specify the dialect explicitly
  dialectOptions: {
      ssl: {
          require: true, // This will require SSL/TLS connections
          rejectUnauthorized: false // VERY IMPORTANT FOR RENDER
      }
  }
});

module.exports= {
    API, PORT, SECRET, sequelize
}