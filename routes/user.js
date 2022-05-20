const express = require('express');
const mock = require("../data/mock");
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
    res.status(404).json("Not found");
  }
});

router.post('/signup', (req, res) => {
  let usuarioCriado = req.body;
  usuarios = [...usuarios, usuarioCriado];
  res.json(usuarioCriado);
});

router.patch('/edit', (req, res) => {
  // todo
});

module.exports = router;
