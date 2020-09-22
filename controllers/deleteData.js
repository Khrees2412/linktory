const Link  = require("../models/Link");

exports.deleteOne = async (req,res) => {
    try {
        const link = await Link.findById(req.params.id);
     // console.log(link)
        if (!link) {
          return res
          .status(404)
          .json({
              success:"false",
              message:"no link found"
          })
        }
       else {
          await link.remove()
          res
          .status(200)
          .json({
            success:"true",
            message:"link deleted"
          })
        }
      }
       catch (err) {
        //console.error(err)
        return  res.status(400).json(err)
      }
}