const Event = require("../../entities/events/Event");

async function updateEvent(req, res) {
  try {
    const { id, nameEvent, data, localEvent, fights } = req.body;
    const mongoPayload = { nameEvent, data, localEvent, fights };
    const eventUpdated = await Event.findByIdAndUpdate(id, mongoPayload, {
      new: true,
    });
    // const eventUpdated = await Event.findOneAndUpdate(localEvent, mongoPayload, {
    //   new: true,
    // });
    res.send({ message: "Evento Atualizado com sucesso!", eventUpdated });
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = updateEvent;
