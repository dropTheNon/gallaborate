var express = require('express');
var Post = require('../models/posts');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Post.find(function(err, posts) {
      if (err) return res.send(err);
      return res.send(posts);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err) return res.send(err);

      return res.send(post);
    });
  })
  .put(function(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.send(err);

      return res.send({ message: 'Update successful' });
    });
  })
  .delete(function(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.send(err);

      return res.send({ message: 'Project deleted' });
    });
  });

module.exports = router;