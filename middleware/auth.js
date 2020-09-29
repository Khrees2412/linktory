const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            msg: 'Not authorized',
        })
    }
    //get token from header
    const token = req.headers.authorization.split(' ')[1]

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    // Verify token
    /*
    try {
       jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Token is not valid' })
            } else {
                req.user = decoded.user
                // console.log(req.user.id)
                next()
            }
        })
    } catch (err) {
        console.error('something wrong with auth middleware')
        res.status(500).json({ msg: 'Server Error' })
    }
    */
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user
        next()
    } catch (err) {
        console.error('something wrong with auth middleware')
        res.status(500).json({ msg: 'Server Error' })
    }
}
