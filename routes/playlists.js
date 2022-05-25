const mock = require('../data/mock');
const express = require('express');
const router = express.Router();

let playlists = JSON.parse(mock).playlists;

router.get('/list', (req, res) => {
  res.json(playlists);
});

router.get('/:id', (req, res) => {
  const [ targetPlaylist ] = playlists.filter(playlist => playlist.id === Number(req.params.id));
  if (targetPlaylist) {
    res.json(targetPlaylist);
  } else {
    res.status(404).json('Not Found');
  }
});

router.post('/new', (req, res) => {
  playlists = [...playlists, req.body];
  res.json(playlists);
});

router.patch('/:id/edit', (req, res) => {
  const targetIndex = playlists.findIndex(playlist => playlist.id === Number(req.params.id));
  if (targetIndex || targetIndex === 0) {
    playlists[targetIndex] = { ...playlists[targetIndex], ...req.body };
    res.json(playlists[targetIndex]);
  } else {
    res.status(404).json('Not found');
  }
});

router.delete('/:id', (req, res) => {
  const targetIndex = playlists.findIndex(playlist => playlist.id === Number(req.params.id));
  if (targetIndex || targetIndex === 0) {
    const deletedPlaylist = playlists[targetIndex];
    playlists.splice(targetIndex, 1);
    res.json(deletedPlaylist);
  } else {
    res.status(404).json('Not found');
  }
});

module.exports = router;
