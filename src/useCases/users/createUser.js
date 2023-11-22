const User = require("../../entities/users/User");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  try {
    const { email, name, password } = req.body;

    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      return res
        .status(409)
        .json({ message: "E-mail já utilizado. Escolha outro!" });
    }

    const salt = bcrypt.genSaltSync(10);
    const senhaCriptografada = bcrypt.hashSync(password, salt);

    const novoUsuario = new User({
      name: name,
      email: email,
      password: senhaCriptografada,
    });

    await novoUsuario.save();

    return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
}

module.exports = createUser;
