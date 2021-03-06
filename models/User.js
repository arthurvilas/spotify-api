const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "'nome' deve ser fornecido"],
    trim: true,
  },
  sobrenome: {
    type: String,
    required: [true, "'sobrenome' deve ser fornecido"],
    trim: true,
  },
  dataDeNascimento: {
    type: Date,
    required: [true, "'dataDeNascimento' deve ser fornecido"],
    trim: true,
  },
  genero: {
    type: String,
    enum: ["masculino", "feminino", "outro"],
  },
  email: {
    type: String,
    required: [true, "'email' deve ser fornecido"],
    trim: true,
    lowercase: true,
    unique: true,
  },
  senha: {
    type: String,
    required: [true, "'senha' deve ser fornecido"],
    minlength: 6,
  },
  plano: {
    type: Number,
    required: [true, "'plano' deve ser fornecido"],
  },
});

// TODO: Criptografar senha
UserSchema.methods.validarSenha = function (senhaFornecida) {
  return this.senha === senhaFornecida;
};

module.exports = mongoose.model("User", UserSchema);
