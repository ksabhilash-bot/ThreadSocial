import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from 'path'
import { connectDB } from './Config/db.js'
import { userRouter } from './Routes/userRoutes.js'
import { postRouter } from './Routes/postRoutes.js';

dotenv.config();

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
const PORT=process.env.SERVER_PORT || 3002


app.use("/api/user",userRouter)
app.use("/api/post",postRouter)

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})
})