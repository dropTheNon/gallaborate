var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  // user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  iAmA: { type: String, required: true },
  // user_email: { type: String, required: true, ref: 'User' },
  // user_name: { type: String, required: true, ref: 'User' },
  // user_aboutMe: { type: String, required: true, ref: 'User' },
  description: { type: String, required: true },
  video_url: String,
  image_url: String,
  // tag_ids: [ { type: mongoose.Schema.ObjectId, ref: 'Tag' } ]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post; 