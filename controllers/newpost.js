var express = require('express');
var Post = require('../models/posts');
var router = express.Router();

router.route('/new')
  .post(function(req, res) {
    console.log("req: ", req);
    Post.create(req.body, function(err, post) {
      if (err) return res.status(500).send(err);
      return res.send(post);
    });
  });

module.exports = router;