const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
  title: String, //model answer
  author: String, //model answer
  body: String //model answer
})

module.exports = mongoose.model('Note', Note)
