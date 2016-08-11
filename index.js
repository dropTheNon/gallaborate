var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/users.js');

// Auth0/Passport/Strategy stuff
var passport = require('passport');
var strategy = require('./config/auth');

// Session and cookie middlewares to keep users logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallaborate');

// App this, App that
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
app.use('/users', require('./controllers/user'));
app.use('/posts', require('./controllers/post'));

// Middleware for Auth0
app.use(cookieParser());
app.use(session({ secret: 'ByTfHdc7G4DADQBy4XjpKSv4EV5i9SWQLTU-EN4dZMu_aMdfUsdn23hf9XNTYDKd', resave: false,  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect('/posts');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);