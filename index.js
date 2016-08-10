var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/users.js');
var app = express();

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallaborate');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
app.use('/users', require('./controllers/user'));
app.use('/posts', require('./controllers/post'));

var josh = new User({
  name: 'Josh',
  email: 'josh@test.com',
});

// app.get('/', function(req, res) {
//   res.send(josh.sayHello());
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);