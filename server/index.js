import { connectToDatabase } from "./utils/db";
import {PORT} from './utils/config'
import express from 'express'
const app = express()
app.use(express.json())

const startServer = async () => {
    try{
        await connectToDatabase()
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

startServer()