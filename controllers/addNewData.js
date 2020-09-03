const Link = require("../models/Link")

exports.createNew = async (req,res) => {
    try {
        req.body.user = req.user.id
        await Link.create(req.body)
        res
        .status(200)
        .json({
            success:"true",
            message:"link added"
        })
      } catch (err) {
        console.error(err)
        res.status(400).json(err)
      }
}