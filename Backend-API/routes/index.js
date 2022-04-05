const express = require("express");             //import the express framework
const router = express.Router();                //create router obj

const{ addSnakes, viewSnakes } = require("../controller/snakeController");  //declare a routing path to snakeController

const{ signup, login } = require("../controller/userController");           //declare a routing path to userController

router.post("/add_snakes", addSnakes);          //setup routing path to add snakes to DB
router.post("/view_snakes", viewSnakes);        //setup routing path to view snake from DB

router.post("/signup", signup);                 //setup routing path to signup
router.post("/login", login);                   //setup routing path to login

module.exports = router;                        //add index.js to the module.exports obj