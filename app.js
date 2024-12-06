const express = require("express");
const mongoose = require("mongoose");
const app = express();
const albumRoutes = require('./routes/albums');
const imageRoutes = require('./routes/images');

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/albums', albumRoutes);
app.use('/albums/:albumId/images', imageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// ...existing code...

// Middleware
app.use(express.json());

// ...additional middleware...

// Routes
// ...define your routes...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ...existing code...

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// ...existing code...