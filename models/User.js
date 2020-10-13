const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true
  },
  name: String,
  profilePhotoUrl: String
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('user', userSchema);
