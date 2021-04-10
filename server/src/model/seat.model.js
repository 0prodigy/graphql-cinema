const mongoose = require("mongoose");
const Screen = require("./screen.model");
const Show = require("./show.model");

const SeatSchema = new mongoose.Schema({
  _id: Number,
  id: Number,
  screen_id: Screen._id,
  is_booked: Boolean,
  show_id: Show._id,
});

module.exports = mongoose.model("Seat", SeatSchema);
