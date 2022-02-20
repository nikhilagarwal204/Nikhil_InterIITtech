const mongoose = require("mongoose");
const VidsSchema = new mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  views: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    require: true,
  },
  url: {
    type: String,
    require: true,
  }
});
const vide = mongoose.model("vids", VidsSchema);
module.exports = vide;
