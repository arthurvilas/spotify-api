const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send('lista de playlists');
});

router.get('/:id', (req, res) => {
  res.send(`playlistEspecifica:${req.params.id}`);
});

router.post('/new', (req, res) => {
  res.send('novaPlaylist:novaPlaylist');
});

router.patch('/:id/edit', (req, res) => {
  res.send('atualizaPlaylist:atualizaPlaylist');
});

module.exports = router;
