const Link  = require("../models/Link");

exports.deleteOne = async (req,res) => {
    try {
        const link = await Link.findById(req.params.id);
    
        if (!link) {
          return res.json({
              message:"no link found"
          })
        }
    
        if (link.user != req.user.id) {
          res.redirect('/user')
        } else {
          await Link.remove({ _id: req.params.id })
          res.redirect('/dashboard')
        }
      } catch (err) {
        console.error(err)
        return  res.status(400).json(err)
      }
}