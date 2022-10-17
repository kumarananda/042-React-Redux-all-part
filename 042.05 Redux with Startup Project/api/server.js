// import { Express } from "express";
import  express  from "express";
import colors from "colors";
import dotenv from 'dotenv';
import studentRoutes from './routes/studentsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import mongoDBConnect from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

// express init
const app = express()
dotenv.config()


// middlewares // body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cookieParser());

// 
//can use server without cors when use proxy on frontend for devdlopment
// delete requist is not working without cors
app.use(cors()) 

// env variabels
const PORT = process.env.SERVER_PORT 

// static folder 
app.use(express.static('api/public'));

// routes
app.use('/api/students', studentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/v1/product', productRoutes);

// error handler
app.use(errorHandler)

// listen server
app.listen(PORT, () => {
    // mongoDB init
    mongoDBConnect()
    console.log(`server running on port ${PORT}` .bgGreen.black);
})
