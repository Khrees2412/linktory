const express = require('express')
const path = require('path')
const passport = require('passport')
const connectDB = require('./config/db')

const users = require('./routes')
const link = require('./routes/link')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Initialize DataBase
connectDB()

//Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

//Routes
app.use('/api/users', users)
app.use('/api/user', link)
/*
app.get("/", (req,res) =>{
    res.send("home")
})
*/
//if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})
//}
const port = process.env.PORT || 5000

app.listen(port, () =>
    console.log(`Server up and running on port ${port} ! on ${Date()}`)
)
