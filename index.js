const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
