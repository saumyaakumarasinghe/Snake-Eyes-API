const User = require("../model/User");          //import the user schema
const bcrypt = require("bcrypt");               //import the bcrypt library to the secure password

//add new user to the db
exports.signup = async function(req, res){
    const hash = await bcrypt.hash(req.body.userPw, 10);  //converting password to hashed password

    //map the data in the request body to variables according to the schema
    const user = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPw: hash
    };

    const mail = req.body.userEmail;            //
    User.findOne({mail}).then(function(foundUser){
        if(foundUser.userEmail == mail){
            res.status(409).send("You already have an account!");
        }
        else{
            const newUser = new User(user);     //create a new user obj

            //save the uer obj to the db
            newUser.save().then(function(){
                return res.send("User registered!");
            }).catch(err => {
                return res.send(err)
            });
        }
    });
};

exports.login = function(req, res){
    const email = req.body.userEmail;
    const password = req.body.userPw;

    User.findOne({email}).then(function(foundUser){
        if(foundUser.userEmail == email){
            bcrypt.compare(password, foundUser.userPw, (err, response) => {
                if(response == true){
                    res.status(200).send("Logged in!");
                }
                else{
                    res.status(404).send("Password does not match!");
                }
            });
        }
        else{
            res.status(404).send("This email does not exists!");
        }        
    });
};