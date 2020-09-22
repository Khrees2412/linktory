const Link = require("../models/Link")

exports.createNew = async (req,res) => {
    try {
        const { url,title } = req.body
        await Link.create({url,title})
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