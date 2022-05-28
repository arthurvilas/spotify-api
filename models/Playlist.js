const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  idUsuario: {
    type: Number,
    required: [true, "'idUsuario' deve ser fornecido"],
  },
  descricao: {
    type: String,
    required: [true, "'descricao' deve ser fornecida"],
  },
  capa: {
    type: String,
  },
  musicas: {
    type: [Number],
  },
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
