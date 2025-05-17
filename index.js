/* eslint-disable no-undef */
import express from 'express';
import { createServer } from 'vite';
import 'dotenv/config';
import cors from 'cors';
import {PORT} from './server/utils/config.js'
import { connectToDatabase } from './server/utils/db.js';
// Import Routes
import cartRouter from './server/routers/cartRouter.js';
import loginRouter from './server/routers/loginRouter.js';
import logoutRouter from './server/routers/logoutRouter.js';
import productRouter from './server/routers/productRouter.js';
import userRouter from './server/routers/userRouter.js';

(async () => {
    await connectToDatabase();
    const app = express();
    //Middlewares
    app.use(cors());
    app.use(express.json());
    // Routes
    app.use("/api/products", productRouter);
    app.use("/api/users", userRouter);
    app.use("/api/carts", cartRouter);
    app.use("/api/login", loginRouter);
    app.use("/api/logout", logoutRouter);

    // Client Web:
    if(process.env.NODE_ENV === 'development') {
        // Serve client web through vite dev server:
        const viteDevServer = createServer({
            server: {
                middlewareMode: true
            },
            root: '.',
            base: '/',
        })
        app.use((await viteDevServer).middlewares)
    }else {
        console.log('xd');
    }

    app.listen(PORT);
    console.log('Server started: http://localhost:' + PORT);
})();