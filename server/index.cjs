'use scric';

const {PORT} = require('./utils/config.cjs')
const express = require('express')
require('express-async-errors')
const {connectToDatabase} = require('./utils/db.cjs')
const cors = require('cors')
const path = require('path')
//Routers
const productRouter = require('./controllers/productRouter.cjs')
const userRouter = require('./controllers/userRouter.cjs')
const cartRouter = require('./controllers/cartRouter.cjs')
const loginRouter = require('./controllers/loginRouter.cjs')
const logoutRouter = require('./controllers/logoutRouter.cjs');
const app = express();

// Middlewares
app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')))


// Routes
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/carts', cartRouter)
app.use('/api/login', loginRouter)
app.use('/api/logout', logoutRouter)

if(process.env.NODE_ENV === "production"){
  console.log("Production");
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  
  const startServer = async () => {
    try {
      await connectToDatabase();
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Error starting server:", error);
    }
  };
  
  startServer();
}else {
  console.log("Development");
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack.dev.cjs')
  
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))

  compiler.hooks.done.tap('StartServer', () => {
    app.get('*', (req,res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'))
    })
  })

  const startServer = () => {
    try {
      connectToDatabase()
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
      })
    }catch(error){
      console.log(error);
    }
  }

  startServer()
}