import dotenv from 'dotenv'
dotenv.config()

export default {
    BACKEND_URL: process.env.BACKEND_URL,
    PORT: process.env.PORT || '3001',
    SECRET: process.env.SECRET
}