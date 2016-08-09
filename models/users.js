var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password_digest: String,
  portfolio_url: String,
  github_url: String,
  dribble_url: String,
  behance_url: String,
  about_me: String
});

userSchema.methods.sayHello = function() {
  return "Hi " + this.name;
}

var User = mongoose.model('User', userSchema);

module.exports = User;