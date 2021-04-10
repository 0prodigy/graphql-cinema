const mongoose = require("mongoose");

const ScreenSchema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String },
  show: [{ type: mongoose.Schema.Types.ObjectId, ref: "Show" }],
});

module.exports = mongoose.model("Screen", ScreenSchema);
