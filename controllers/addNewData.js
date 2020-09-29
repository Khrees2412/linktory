const Link = require('../models/Link')
const User = require('../models/user')

exports.createNew = async (req, res) => {
    try {
        /*
        const user = await User.findById(req.user.id).select('-password')
        const { url, title } = req.body
        await Link.create({ url, title, user }) //:{ id:user.id,name: user.name}})
        res.status(200).json({
            success: 'true',
            message: 'link added',
            data: user,
        })
        */

        const user = await User.findById(req.user.id).select('-password')

        const newLink = new Link({
            name: user.name,
            url,
            title,
            //user: req.user.id,
        })

        const link = await newLink.save()

        res.json(link)
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
}
