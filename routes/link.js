const express = require("express");
const router = express.Router();

//Controllers
const getAllData = require("../controllers/getAllData")
const addNewData = require("../controllers/addNewData")
const deleteData = require("../controllers/deleteData")
const updateData = require("../controllers/updateData")

router.get("/view_links", getAllData.fetchAll)
router.post("/add_link" , addNewData.createNew)
router.delete("/delete_link/:id", deleteData.deleteOne)
router.put("/edit_link/:id", updateData.updateOne)

module.exports = router