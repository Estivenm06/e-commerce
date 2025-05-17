import { Sequelize } from "sequelize";
import pg from "pg";

const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET;
const API = process.env.API;
const DB = process.env.DB_URL;

let sequelize;

if(process.env.NODE_ENV === 'development'){
    sequelize = new Sequelize({
        dialect: 'postgres',
        database: 'postgres',
        username: 'postgres',
        password: process.env.PASS,
        host: 'localhost',
        port: 5432,
        ssl: true,
    })
}else{
    sequelize = new Sequelize(DB, {
      dialect: "postgres",
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    });
}

export { API, PORT, SECRET, sequelize };
