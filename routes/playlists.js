const mock = require('../data/mock');
const express = require('express');
const router = express.Router();

let playlists = JSON.parse(mock).playlists;

router.get('/list', (req, res) => {
  res.json(playlists);
});

router.get('/:id', (req, res) => {
  res.json(playlists.filter(playlist => playlist.id === Number(req.params.id)));
});

router.post('/new', (req, res) => {
  playlists = [...playlists, req.body];
  res.json(playlists);
});

router.patch('/:id/edit', (req, res) => {
  // todo
});

router.delete('/:id', (req, res) => {
  playlists = playlists.filter(playlist => playlist.id !== Number(req.params.id));
  res.json(playlists);
});

module.exports = router;
