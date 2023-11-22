const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers["token"];
  if (!token) {
    res.status(401).json({ message: "Token obrigatório!" });
  }
  try {
    const tokenLimpo = token.replace(/^Bearer\s+/, "");
    const tokenDecodificado = jwt.verify(tokenLimpo, "XINGLING");
    req.usuarioId = tokenDecodificado.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido!" });
  }
}

module.exports = verifyToken;
