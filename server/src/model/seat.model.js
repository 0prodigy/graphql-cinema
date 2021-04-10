const mongoose = require("mongoose");
const Screen = require("./screen.model");
const Show = require("./show.model");

const SeatSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  id: { type: Number },
  screen_id: { type: mongoose.Schema.Types.ObjectId, ref: "Screen" },
  is_booked: { type: Boolean },
  show_id: { type: mongoose.Schema.Types.ObjectId, ref: "Show" },
});

module.exports = mongoose.model("Seat", SeatSchema);
