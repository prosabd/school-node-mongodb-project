// routes/albums.js
const express = require('express');
const router = express.Router();
const Album = require('../models/Album');
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(async (req, res) => {
    const albums = await Album.find({});
    res.render('albums/index', { albums });
  }));
  
router.get('/new', (req, res) => {
    res.render('albums/new');
  });
  
router.get('/:id', catchAsync(async (req, res) => {
    const album = await Album.findById(req.params.id).populate('images');
    res.render('albums/show', { album });
  }));

// Add a POST route to handle album creation
router.post('/', catchAsync(async (req, res) => {
  const album = new Album(req.body);
  await album.save();
  res.redirect(`/albums/${album._id}`);
}));

// Display a single album
router.get('/:id', catchAsync(async (req, res) => {
  const album = await Album.findById(req.params.id).populate('images');
  res.json(album);
}));

// Delete an album
router.delete('/:id', catchAsync(async (req, res) => {
  await Album.findByIdAndDelete(req.params.id);
  res.redirect('/albums');
}));

module.exports = router;