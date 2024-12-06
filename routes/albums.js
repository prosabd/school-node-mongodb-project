// routes/albums.js
const express = require('express');
const router = express.Router();
const Album = require('../models/Album');
const catchAsync = require('../utils/catchAsync');

// Display a list of albums
router.get('/', catchAsync(async (req, res) => {
  const albums = await Album.find({});
  res.json(albums);
}));

// Show form to create a new album
router.get('/new', (req, res) => {
  res.render('albums/new');
});

// Handle album creation
router.post('/', catchAsync(async (req, res) => {
  const album = new Album(req.body);
  await album.save();
  res.redirect('/albums');
}));

// Display a single album
router.get('/:id', catchAsync(async (req, res) => {
  const album = await Album.findById(req.params.id).populate('images');
  res.render('albums/show', { album });
}));

// Delete an album
router.delete('/:id', catchAsync(async (req, res) => {
  await Album.findByIdAndDelete(req.params.id);
  res.redirect('/albums');
}));

module.exports = router;