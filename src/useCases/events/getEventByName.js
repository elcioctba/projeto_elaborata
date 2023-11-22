const Event = require("../../entities/events/Event");

async function getEventByName(req, res) {
  try {
    const event = await Event.findOne({
      nameEvent: new RegExp(req.body.search, "i"),
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400);
    res.send({ message: "Erro no banco!" });
  }
}

module.exports = getEventByName;
