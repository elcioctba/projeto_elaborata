const mongoose = require("mongoose");
const { Schema } = mongoose;

const fightSchema = new mongoose.Schema(
  {
    fighter1: String,
    fighter2: String,
    category: String,
    winner: { type: String, default: "" },
  },
  { _id: false }
);

// Definindo o esquema do usuário
const eventSchema = new mongoose.Schema({
  nameEvent: {
    type: String,
    required: true,
  },
  localEvent: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  fights: [fightSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Criar o modelo 'Event' com base no esquema definido
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
