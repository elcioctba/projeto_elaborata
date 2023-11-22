const Event = require("../../entities/events/Event");

async function createEvent(req, res) {
  try {
    console.log(req.usuarioId);
    const { nameEvent, data, localEvent, fights } = req.body;

    const newEvent = new Event({
      nameEvent: nameEvent,
      data: data,
      localEvent: localEvent,
      fights: fights,
    });

    newEvent.save();
    res.status(200).json({ message: "Luta cadastrada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Erro no banco!" });
  }
}

module.exports = createEvent;
