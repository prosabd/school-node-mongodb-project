// routes/images.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const Image = require('../models/Image');
const Album = require('../models/Album');
const catchAsync = require('../utils/catchAsync');

// For file uploads
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Show form to upload a new image to an album
router.get('/new', (req, res) => {
  res.render('images/new', { albumId: req.params.albumId });
});

// Handle image upload
router.post('/', upload.single('image'), catchAsync(async (req, res) => {
  const album = await Album.findById(req.params.albumId);
  const image = new Image({
    url: `/uploads/${req.file.filename}`,
    album: album._id,
  });
  await image.save();
  album.images.push(image);
  await album.save();
  res.redirect(`/albums/${album._id}`);
}));

// Delete an image from an album
router.delete('/:imageId', catchAsync(async (req, res) => {
  const { albumId, imageId } = req.params;
  await Image.findByIdAndDelete(imageId);
  await Album.findByIdAndUpdate(albumId, { $pull: { images: imageId } });
  res.redirect(`/albums/${albumId}`);
}));

module.exports = router;