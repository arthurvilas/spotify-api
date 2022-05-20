const express = require('express');
const mock = require("../data/mock");
const router = express.Router();

let musicas = JSON.parse(mock).musicas;

router.get('/', (req, res) => {
  const { search } = req.query();
  if (search) {
    const musicasFiltradas = musicas.filter(
      (musica) => musica.nome.toLowerCase().includes(search.toLowerCase())
    );
    res.json(musicasFiltradas);
  } else {
    res.status(404).send('Invalid query string');
  }
});

router.get('/:id', (req, res) => {
  res.json(musicas.filter(musica => musica.id === Number(req.params.id)));
});

module.exports = router;