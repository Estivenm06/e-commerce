import { Sequelize } from "sequelize";
import pg from "pg";
import { DATABASE_URL } from "./config.js";
import { SequelizeStorage, Umzug } from "umzug";

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});



export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("You have been successfully connected to the database.");
  } catch (error) {
    console.log("A error has occurred trying to connect to the database.");
    return process.exit(1);
  }
};
