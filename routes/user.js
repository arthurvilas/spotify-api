const express = require('express');
const mock = require('../data/mock');
const router = express.Router();

let usuarios = JSON.parse(mock).usuarios;

router.post('/login', (req, res) => {
  let logged = false;
  usuarios.forEach((usuario) => {
    if (usuario.email === req.body?.email && usuario.senha === req.body?.senha) {
      res.json(usuario);
      logged = true;
    }
  });
  if (!logged) {
    res.status(401).json('Unauthorized');
  }
});

router.post('/signup', (req, res) => {
  let usuarioCriado = req.body;
  usuarios = [...usuarios, usuarioCriado];
  res.json(usuarioCriado);
});

router.patch('/:id/edit', (req, res) => {
  const targetIndex = usuarios.findIndex(usuario => usuario.id === Number(req.params.id));
  if (targetIndex || targetIndex === 0) {
    usuarios[targetIndex] = { ...usuarios[targetIndex], ...req.body };
    res.json(usuarios[targetIndex]);
  } else {
    res.status(404).json('Not found');
  }
});

module.exports = router;
