const mongoose = require("mongoose");
const Movie = require("./movie.model");

const ShowSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  time: { type: String },
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ticket_price: { type: Number },
});

module.exports = mongoose.model("Show", ShowSchema);
