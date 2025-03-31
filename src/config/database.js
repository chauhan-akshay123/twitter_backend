const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const connectDb = async () => {
    mongoose
     .connect(mongoUri)
     .then((error) => {
        console.log("Connected to Database.");
     })
     .catch((error) => console.log("Error connecting to database."));
};

module.exports = { connectDb };