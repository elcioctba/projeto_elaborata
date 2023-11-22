const Event = require("../../entities/events/Event");

async function getAllEvents(req, res) {
  try {
    const listEvents = await Event.find().limit(3).sort("nameEvent");
    res.status(200).json(listEvents);
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = getAllEvents;
