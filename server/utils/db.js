const pg = require('pg')
const {Sequelize} = require('sequelize')
const {DATABASE_URL} = require('./config.js')
const {SequelizeStorage, Umzug} = require('umzug')

const sequelize = new Sequelize(DATABASE_URL, {
  dialectModule: pg,
  dialect: "postgres",
});

const migrationConf = {
  migrations: { glob: './server/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({sequelize, tableName: 'migrations'}),
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
    await runMigration()
    console.log("You have been successfully connected to the database.");
  } catch (error) {
    console.log("A error has occurred trying to connect to the database.");
    return process.exit(1);
  }
};

module.exports= {sequelize, connectToDatabase, runMigration}