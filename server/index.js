const {PORT} = require('./utils/config.js')
const express = require('express')
require('express-async-errors')
const {connectToDatabase} = require('./utils/db.js')
//Routers
const productRouter = require('./controllers/productRouter.js')
const userRouter = require('./controllers/userRouter.js')
const cartRouter = require('./controllers/cartRouter.js')

const app = express();
app.use(express.json());
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/carts', cartRouter)

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
