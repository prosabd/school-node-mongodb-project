// models/Image.js
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  },
});

module.exports = mongoose.model('Image', ImageSchema);