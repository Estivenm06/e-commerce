import { Sequelize } from "sequelize";
import {BACKEND_URL} from './config'

export const sequelize = new Sequelize(BACKEND_URL)

export const connectToDatabase = async () => {
    try{
        await sequelize.authenticate()
        console.log('You have been successfully connected to the database.');
    }catch{
        console.log('A error has occurred trying to connect to the database.');
        return process.exit(1)
    }
}