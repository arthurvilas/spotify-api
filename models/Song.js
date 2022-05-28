const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "'nome' deve ser fornecido"],
  },
  autor: {
    type: String,
    required: [true, "'autor' deve ser fornecido"],
  },
  audio: {
    type: String,
    required: [true, "'audio' deve ser fornecido"],
  },
});

module.exports = mongoose.model("Song", SongSchema);
