const User = require("../../entities/users/User");

async function getAllUsers(req, res) {
  try {
    console.log(req.usuarioId);
    const listaUsuarios = await User.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = getAllUsers;
