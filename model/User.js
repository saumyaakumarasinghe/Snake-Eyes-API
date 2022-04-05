const mongoose = require("mongoose");       //import mongoose library to comunicate with mongoDB

//setup the schema to add data into the db
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
        trim: true
    },
    userPw: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Users", userSchema);       //add the schema to the module.exports obj  