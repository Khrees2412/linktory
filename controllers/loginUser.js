const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const keys = require('../config/keys')
const config = require('config')

const validateLoginInput = require('../validation/login')
const User = require('../models/user')

exports.loginNewUser = (req, res) => {
    //Form Validation
    const { errors, isValid } = validateLoginInput(req.body)

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email
    const password = req.body.password

    //Find User by email
    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(400).json({
                emailnotfound: 'Email Not Found',
            })
        }
        //Check password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                //User matched
                //create JWT payload
                const payload = {
                    user: {
                        id: user.id,
                        name: user.name,
                    },
                }
                //Sign token
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    {
                        expiresIn: 315569266,
                    },
                    (err, token) => {
                        if (err) throw err
                        res.json({
                            success: true,
                            user: {
                                name: user.name,
                                id: user.id,
                            },
                            token,
                        })
                        //console.log('payload:', token.payload.id)
                    }
                )
            } else {
                return res.status(400).json({
                    passwordincorrect: 'Password Incorrect',
                })
            }
        })
    })
}
