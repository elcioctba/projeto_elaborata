const Event = require("../../entities/events/Event");

async function getAllEventsByUserId(req, res) {
  try {
    console.log(req.usuarioId);
    const listEvents = await Event.findOne({ user: req.usuarioId });
    res.status(200).json(listEvents);
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = getAllEventsByUserId;
