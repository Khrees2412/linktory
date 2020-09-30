const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

//Controllers
const fetchLinks = require('../controllers/link').fetchAll
const addLink = require('../controllers/link').createNew
const deleteLink = require('../controllers/link').deleteOne
const updateLink = require('../controllers/link').updateOne

//Routes
router.get('/view_links', auth, fetchLinks)
router.post('/add_link', auth, addLink)
router.delete('/delete_link/:id', auth, deleteLink)
router.put('/edit_link/:id', auth, updateLink)

module.exports = router
