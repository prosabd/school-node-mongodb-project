const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Define your schema fields
  name: String,
  email: String,
  password: String,
  // ...other fields...
});

module.exports = mongoose.model('User', UserSchema);