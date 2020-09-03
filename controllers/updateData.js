const Link  = require("../models/Link");

exports.updateOne = async (req,res) => {
    try {
        let link = await Link.findById(req.params.id)
    
        if (!link) {
          return res.render({message:"no link found"})
        }
    
        if (link.user != req.user.id) {
          res.redirect('/user')
        } else {
          link = await Link.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
          })
    
          res.redirect('/dashboard')
        }
      } catch (err) {
        console.error(err)
        return res.status(400).json(err)
      }
}