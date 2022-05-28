const mock = require("../data/mock");
const express = require("express");
const router = express.Router();

const Playlist = require("../models/Playlist");

router.get("/list", async (req, res) => {
  const playlists = await Playlist.find({});
  res.json(playlists);
});

router.get("/:id", async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);
  if (!playlist) {
    throw new Error("Nenhuma playlist com id: " + req.params.id);
  }
  res.status(200).json({ playlist });
});

router.post("/new", async (req, res) => {
  const { idUsuario, descricao } = req.body;
  const novaPlaylist = await Playlist.create(req.body);
  res.json(novaPlaylist);
});

router.patch("/:id/edit", async (req, res) => {
  const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!playlist) {
    throw new Error("Nenhuma playlist com id: " + req.params.id);
  }
  res.json(playlist);
});

router.delete("/:id", async (req, res) => {
  const playlist = await Playlist.findByIdAndDelete(req.params.id);
  if (!playlist) {
    throw new Error("Nenhuma playlist com id: " + req.params.id);
  }
  res.json(playlist);
});

module.exports = router;
