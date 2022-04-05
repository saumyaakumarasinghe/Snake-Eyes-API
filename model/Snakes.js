const mongoose = require("mongoose");           //import mongoose library to comunicate with mongoDB

//setup the schema to add data into the db
const snakeSchema = new mongoose.Schema({
    snakeName:{
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    snakeScientificName:{
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    snakeType: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    snakeAvgSize: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    snakeColor: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    Weight: {
        type: String,
        required: false,
        maxlength: 100,
        trim: true
    },
    Family: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    Genus: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    snakeVenomType: {
        type: String,
        required: false,
        maxlength: 100,
        trim: true
    },
    snakeDescription:{
        type: String,
        required: true,
        maxlength: 1500,
        trim: true
    },
    snakeImg: {
        type: String,
        required: false,
        maxlength: 100,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Snakes", snakeSchema);  //add the schema to the module.exports obj   