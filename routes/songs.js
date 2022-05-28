const express = require("express");
const router = express.Router();

const Song = require("../models/Song");

router.get("/", async (req, res) => {
  const { nome, autor } = req.query;
  const dbQuery = {};
  if (nome) {
    dbQuery.nome = nome;
  }
  if (autor) {
    dbQuery.autor = autor;
  }
  const songs = await Song.find(dbQuery);
  res.json(songs);
});

router.get("/:id", async (req, res) => {
  const song = await Song.findById(req.params.id);
  if (!song) {
    throw new Error("Nenhuma música com id: " + req.params.id);
  }
  res.json(song);
});

module.exports = router;
