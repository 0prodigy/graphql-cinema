const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  actor: { type: mongoose.Schema.Types.ObjectId, ref: "Actor" },
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director" },
  rating: { type: Number },
});

module.exports = mongoose.model("Movie", MovieSchema);
