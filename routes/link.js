const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

//Controllers
const getAllData = require('../controllers/getAllData')
const addNewData = require('../controllers/addNewData')
const deleteData = require('../controllers/deleteData')
const updateData = require('../controllers/updateData')

router.get('/view_links', auth, getAllData.fetchAll)
router.post('/add_link', auth, addNewData.createNew)
router.delete('/delete_link/:id', auth, deleteData.deleteOne)
router.put('/edit_link/:id', auth, updateData.updateOne)

module.exports = router
