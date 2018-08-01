//app is not defined answer:
const express = require('express')
const app = express()

//for the routes to use them:
app.use(require('./routes/notes'))
//use hbs
app.set("view engine", "hbs")
//given
app.listen(3002, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
