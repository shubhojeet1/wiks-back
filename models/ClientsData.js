const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("clientimages", ClientSchema);
