const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const albumRoutes = require('./routes/albums');
const imageRoutes = require('./routes/images');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));

// Serve static files
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.redirect('/albums');
});

// Routes
app.use('/albums', albumRoutes);
app.use('/albums/:albumId/images', imageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/tp-node-mongodb')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));