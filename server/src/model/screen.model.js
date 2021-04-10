const mongoose = require("mongoose");
const Show = require("./show.model");

const ScreenSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  show: [Show],
});

module.exports = mongoose.model("Screen", ScreenSchema);
