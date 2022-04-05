const Snake = require("../model/Snakes");           //import the snake schema

//add new snake to the db
exports.addSnakes = function(req, res){
    
    //map the data in the request body to variables according to the schema
    const snake = {
        snakeName: req.body.snakeName,
        snakeScientificName: req.body.snakeScientificName,
        snakeType: req.body.snakeType,
        snakeAvgSize: req.body.snakeAvgSize,
        snakeColor: req.body.snakeColor,
        Weight: req.body.Weight,
        Family: req.body.Family,
        Genus: req.body.Genus,
        snakeVenomType: req.body.snakeVenomType,
        snakeDescription: req.body.snakeDescription,
        snakeImg: req.body.snakeImg
    };

    const newSnake = new Snake(snake);              //create a new snake obj

    //save the snake obj to the db
    newSnake.save().then(function(){
        //console.log("Snake added");
        return res.send("Snake added to the database successfully!");
    }).catch(err => {
        return res.send(err);
    }); 
};

//view snakes from db
exports.viewSnakes = async function(req, res){ 
    const snakeid = req.body.snakeid;
    //const snakeid = "6240348dc92dc4ffbd9386da"
    Snake.findById(snakeid).then(function(foundSnake){
        if(foundSnake._id == snakeid){
            res.status(200).send({
                "snakeName": foundSnake.snakeName,
                "snakeScientificName": foundSnake.snakeScientificName,
                "snakeType": foundSnake.snakeType,
                "snakeAvgSize": foundSnake.snakeAvgSize,
                "snakeColor": foundSnake.snakeColor,
                "Weight": foundSnake.Weight,
                "Family": foundSnake.Family,
                "Genus": foundSnake.Genus,
                "snakeVenomType": foundSnake.snakeVenomType,
                "snakeDescription": foundSnake.snakeDescription,
                "snakeImg": foundSnake.snakeImg,
            });           
        }
        else{
            res.status(500).send("Snake is not found!");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
};