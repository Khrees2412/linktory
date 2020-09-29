const Link = require('../models/Link')

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
