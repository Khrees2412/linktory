const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
//require('dotenv').config()

const users = require('./routes')
const link = require('./routes/link')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Initialize DataBase
connectDB()

//Routes
app.use('/api/users', users)
app.use('/api/user', link)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Home')
    })
}
const port = process.env.PORT || 5000

app.listen(port, () =>
    console.log(`Server up and running on port ${port} ! on ${Date()}`)
)
