const {PORT} = require('./utils/config.js')
const express = require('express')
require('express-async-errors')
const {connectToDatabase} = require('./utils/db.js')
//Routers
const productsRouter = require('./controllers/productsRouter.js')
const app = express();
app.use(express.json());
app.use('/api/products', productsRouter)

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
