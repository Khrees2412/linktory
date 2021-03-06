const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    //get token from header
    // const token = req.header('x-auth-token')
    const token = req.header('authorization')
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        console.log(token)
        next()
    } catch (err) {
        console.error('something wrong with auth middleware')
        res.status(500).json({ msg: 'Server Error' })
    }
}
