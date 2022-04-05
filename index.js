const express = require("express");         //import express framework
const mongoose = require("mongoose");       //import mongoose library to comunicate with mongoDB
const cors = require("cors");               //import cors middleware 

const router = require("./routes");         //impoprt routes folder

const app = express();                      //create express app

const dotenv = require("dotenv");           //import environmental variable file
dotenv.config();                            //configure environmental variable file

const PORT = process.env.PORT || 8000;      //setup port

const URI = process.env.DATABASE_URI;       //setup URI to connect to db

app.use(cors());                            //allow middleware to express app
app.use(express.json());                    //allow express app to view the request body 
app.use("/api", router);                    //setup routing path

//connect to the db
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function() {
    console.log("Connected to the database!");
}).catch(err => {
    console.log(err);
});

//setup the port to run in express app
app.listen(PORT, function() {
    console.log("Running on port " + PORT);
});