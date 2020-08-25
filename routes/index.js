const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/user")

//@route POST api/users/register/
//@desc Register user
//@access Public 

router.post("./register", (req,res) => {
    //Form Validation
    const {errors, isValid } = validateRegisterInput(req.body);

// Check validation
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
                        .catch(err => console.log(err));
                    });
                });
            }
        });
    });


//@route POST api/users/login/
//@desc Login user and return JWT token
//@access Public 
router.post("/login", (req,res) => {
        //Form Validation
        const {errors, isValid } = validateLoginInput(req.body);

        //Check validation
        if(!isValid){
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;

        //Find User by email
        User.findOne({email}).then(user => {
            if(!user){
                return res.status(400).json({
                    emailnotfound:"Email Not Found" })
            }
            //Check password
            bcrypt.compare(password,user.password).then(isMatch => {
                if(isMatch){
                    //User matched
                    //create JWT payload
                    const payload = {
                        id:user.id,
                        name:user.name
                    };
                    //Sign token 
                    jwt.sign(
                        payload,keys.secretOrKey,{
                            expiresIn:315569266
                        },
                        (err,token) => {
                            res.json({
                                success:true,
                                token:"Bearer" + token
                            });
                        }
                    );
                }else{
                    return res.status(400).json({
                        passwordincorrect: "Password Incorrect"
                    })
                }
            })
        })
})
module.exports = router