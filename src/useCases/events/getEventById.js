function getUserById(req, res) {
  try {
    res.status(200);
    res.send({
      id: req.params.id,
      name: "Eduardo",
      email: "edu@edu.com",
      address: "Rua XingLing,123",
    });
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = getUserById;
