const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router")
const singleHotelRouter = require("./routes/singleHotel.router")
const authRouter = require("./routes/auth.router")
const wishlistRouter = require("./routes/wishlist.router")

const hotelDataAddedToDB = require("./routes/dataimport.router")
const categoryDataAddedToDB = require("./routes/categoryimport.router")

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req,res)=> {
    res.send("Hello")
})

app.use("/api/hoteldata", hotelDataAddedToDB);
app.use("/api/categorydata", categoryDataAddedToDB);

app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter)


mongoose.connection.once("open",()=>{
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT,()=>{
        console.log("Server is up and running");
    });
})

