var express = require('express');
var User = require('../models/users');
var router = express.Router();

router.route('/create')
  .post(function(req, res) {
    User.create(req.body, function(err, user) {
      console.log(req.body);
      if (err) return res.status(500).send(err);
      return res.send(user);
    });
  });

module.exports = router;