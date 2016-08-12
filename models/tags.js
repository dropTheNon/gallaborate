var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // post_ids: [ { type: mongoose.Schema.ObjectId, ref: 'Post' } ]
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;