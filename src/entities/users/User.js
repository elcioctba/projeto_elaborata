const mongoose = require("mongoose");

// Definindo o esquema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Criar o modelo 'User' com base no esquema definido
const User = mongoose.model("User", userSchema);

module.exports = User;
