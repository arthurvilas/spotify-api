const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error('Nenhum usuário com id: ' + req.params.id);
  }
  res.json(user);
});

router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    throw new Error("'email' e 'senha' devem ser fornecidos");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("'email' inválido");
  }
  const senhaCorreta = user.validarSenha(senha);
  if (!senhaCorreta) {
    throw new Error('Credenciais inválidas');
  }
  res.json({ user });
});

router.post('/signup', async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(201).send(user);
});

router.patch('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    throw new Error('Nenhum usuário com id: ' + req.params.id);
  }
  res.json(user);
});

module.exports = router;
