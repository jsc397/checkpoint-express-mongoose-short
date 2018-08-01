const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notes')


// router.get('/', (req,res) => {
//   res.status(200)
//   res.send("hello")
// })
router.get('/', notesController.index)
router.get('/notes/:id', notesController.show)


module.exports = router
