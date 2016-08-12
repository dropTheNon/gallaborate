var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/users.js');
var app = express();

// Mongoose
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gallaborate');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
app.use('/users', require('./controllers/user'));
app.use('/api/posts', require('./controllers/post'));
app.use('/posts', require('./controllers/newpost'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);