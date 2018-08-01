//created for test
//needs access to routes and models
const Note = require('../models/Note')

module.exports = {
  index: function (req, res) {
    Note.find()
    .then( (notes) => {
      res.status(200)
      res.render('index', { notes })
    })
  },
  show: function (req, res) {
    Note.findOne({_id: req.params.id})
    .then( (note) => {
      res.render('show', { note })
    })
    .catch(err => { console.log('err: ' + err)})
  }
}

//body is post request so req.body
//params is coming from the path
