const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('login:login');
});

router.post('/signup', (req, res) => {
  res.send('cadastro:cadastro');
});

router.patch('/editar', (req, res) => {
  res.send('edit:edit');
});

module.exports = router;
