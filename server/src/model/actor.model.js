const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  movies: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  rating: { type: Number },
});

module.exports = mongoose.model("Actor", ActorSchema);
