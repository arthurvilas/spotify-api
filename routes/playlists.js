const express = require("express");
const router = express.Router();

const Playlist = require("../models/Playlist");

router.get("/", async (req, res) => {
  const { idUsuario } = req.query;
  const dbQuery = {};
  if (idUsuario) {
    dbQuery.idUsuario = idUsuario || 0;
  }
  const playlists = await Playlist.find(dbQuery);
  res.json(playlists);
});

router.get("/:id", async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);
  if (!playlist) {
    throw new Error("Nenhuma playlist com id: " + req.params.id);
  }
  res.status(200).json({ playlist });
});

router.post("/", async (req, res) => {
  const novaPlaylist = await Playlist.create(req.body);
  res.json(novaPlaylist);
});

router.patch("/:id", async (req, res) => {
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
