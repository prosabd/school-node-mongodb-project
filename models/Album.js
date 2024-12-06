// models/Album.js
const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    },
  ],
});

module.exports = mongoose.model('Album', AlbumSchema);