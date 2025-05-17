import { Umzug, SequelizeStorage } from "umzug";
import { sequelize } from "./config.js";

const migrationConf = {
  migrations: { glob: "./server/migrations/*.cjs" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
  logger: console,
};

const runMigration = async () => {
  const migration = new Umzug(migrationConf);
  const migrations = await migration.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigration();
    console.log("You have been successfully connected to the database.");
  } catch (error) {
    console.log(error);
    console.log("A error has occurred trying to connect to the database.");
    return process.exit(1);
  }
};

export { connectToDatabase };
