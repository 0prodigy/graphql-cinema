const mongoose = require("mongoose");

const DirectorSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  movies: Movie,
  rating: Number,
});

module.exports = mongoose.model("Direcotr", DirectorSchema);
