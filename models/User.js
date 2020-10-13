const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true
  },
  name: String,
  profilePhotoUrl: String
});

module.exports = mongoose.model('user', userSchema);
