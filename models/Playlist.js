const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: [mongoose.Schema.Types.ObjectId],
  },
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
