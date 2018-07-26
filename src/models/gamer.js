const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  gamer: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Gamer = mongoose.model("Gamer", gamerSchema);

module.exports = Gamer;
