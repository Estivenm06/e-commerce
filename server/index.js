import {PORT} from './utils/config.js'
import express from "express";
import { connectToDatabase } from "./utils/db.js";
import 'express-async-errors'
const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
