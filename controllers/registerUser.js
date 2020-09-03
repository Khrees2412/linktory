const bcrypt = require("bcryptjs");

const validateRegisterInput = require("../validation/register");

const User = require("../models/user")

exports.registerNewUser = (req,res) => {
    //Form Validation 
    
    const {errors, isValid } = validateRegisterInput(req.body);

 //Check validation
    if(!isValid){
       return res.status(400).json(errors)
    }
    
    User.findOne({email:req.body.email }).then(user => {
        if(user){
            return res.status(400).json({email:"Email already exists" })
        }
        else{
                const newUser = new User({
                    name: req.body.name,
                    email:req.body.email,
                    password: req.body.password
                });
                //Hash password before saving to database
                bcrypt.genSalt(10,( err,salt ) => {
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.json(user))
                        .catch(err => res.status(400).json(err));
                    });
                });
            }
        });
        
    };