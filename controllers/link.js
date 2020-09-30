const Link = require('../models/Link')
const User = require('../models/user')

exports.createNew = async (req, res) => {
    try {
        const details = req.user
        const user = await User.findById(details.id).select('-password')
        const { url, title } = req.body
        await Link.create({ url, title, user, name: details.name })
        res.status(200).json({
            success: 'true',
            message: 'link added',
            //data: details,
        })
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
}

// @ desc Delete Link

exports.deleteOne = async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        // console.log(link)
        if (!link) {
            return res.status(404).json({
                success: 'false',
                message: 'no link found',
            })
        } else {
            await link.remove()
            res.status(200).json({
                success: 'true',
                message: 'link deleted',
            })
        }
    } catch (err) {
        //console.error(err)
        return res.status(400).json(err)
    }
}

//@ desc Get all links
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

// @desc Update a link

exports.updateOne = async (req, res) => {
    try {
        let link = await Link.findById(req.params.id)
        if (link.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        if (!link) {
            return res.json({ message: 'no link found' })
        }
        link = await Link.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true,
            },
            res.json({
                message: 'changed',
            })
        )
    } catch (err) {
        /*
        if (link.user != req.user.id) {
          res.redirect('/user')
        } else {
          )
    
          res.redirect('/dashboard')
        }
        */
        console.error(err)
        return res.status(400).json(err)
    }
}
