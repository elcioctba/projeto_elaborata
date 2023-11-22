const User = require("../../entities/users/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      const senhaValida = bcrypt.compareSync(
        password,
        usuarioExistente.password
      );

      if (!senhaValida) {
        return res.status(400).json({ message: "Credenciais inválidas!" });
      }

      const token = jwt.sign({ id: usuarioExistente._id }, "XINGLING", {
        expiresIn: "24h",
      });

      return res
        .status(200)
        .json({ message: "Login efetuado com sucesso!", token });
    } else {
      return res.status(400).json({ message: "Credenciais inválidas!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
}

module.exports = loginUser;
