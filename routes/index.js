const express = require("express");
const router = express.Router();

//Controllers
const registerUser = require("../controllers/registerUser")
const loginUser  = require("../controllers/loginUser")


//@route POST api/users/register/
//@desc Register user
//@access Public 

router.post("/register", registerUser.registerNewUser)


//@route POST api/users/login/
//@desc Login user and return JWT token
//@access Public 
router.post("/login", loginUser.loginNewUser)


module.exports = router