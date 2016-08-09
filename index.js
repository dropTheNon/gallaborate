var express = require('express');
var bodyParser = require('body-parser');
var User = require('./models/users.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallaborate');

var josh = new User({
  name: 'Josh',
  email: 'josh@test.com',
});

app.get('/', function(req, res) {
  res.send(josh.sayHello());
});

app.listen(3000);