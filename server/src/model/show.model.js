const mongoose = require("mongoose");
const Movie = require("./movie.model");

const ShowSchema = new mongoose.Schema({
  _id: Number,
  time: String,
  movie_id: Movie._id,
  ticket_price: Number,
});

module.exports = mongoose.model("Show", ShowSchema);
