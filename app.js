const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/user');
const playlistsRoutes = require('./routes/playlists');
const songsRoutes = require('./routes/songs');
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/playlists', playlistsRoutes);
app.use('/api/v1/songs', songsRoutes);

const port = 8080;
app.listen(
  port,
  () => console.log(`Server ouvindo na porta: ${port}...`)
);
