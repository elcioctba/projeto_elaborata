function deleteUser(req, res) {
  try {
    res.status(200);
    res.send({
      message: "Usuário Deletado com sucesso!",
      idDeletado: req.params.id,
    });
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = deleteUser;
