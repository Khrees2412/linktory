const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const passport = require("passport")

const users = require("./routes");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Routes
app.use("/users", users)
app.get("/", (req,res) => {
    res.send("Home")
})
//app.use(express.static(path.join(__dirname, 'client/public')));

const port = process.env.PORT ||  5000;

app.listen(port, () => console.log(`Server up and running on port ${port} ! at ${Date()}`))