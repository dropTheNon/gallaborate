var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallaborate')

// app.get('/', function(req, res) {
//   res.send('hello josh');
// });

app.listen(3000);