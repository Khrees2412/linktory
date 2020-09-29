const Link = require('../models/Link')

exports.fetchAll = async (req, res) => {
    try {
        // const links = await Link.find({ status: 'public' })
        //   .populate('user')
        //   .sort({ createdAt: 'desc' })
        const links = await Link.find().sort({ date: -1 })
        res.status(200).json({
            success: 'true',
            data: links,
        })
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
}
