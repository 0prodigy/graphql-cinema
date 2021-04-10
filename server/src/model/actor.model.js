const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  movies: Movie,
  rating: Number,
});

module.exports = mongoose.model("Actor", ActorSchema);
