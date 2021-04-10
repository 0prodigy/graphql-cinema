const mongoose = require("mongoose");
const Actor = require("./actor.model");
const Director = require("./director.model");

const MovieSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  actor: Actor,
  director: Director,
  rating: Number,
});

module.exports = mongoose.model("Movie", MovieSchema);
