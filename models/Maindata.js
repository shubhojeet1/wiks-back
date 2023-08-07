const mongoose = require("mongoose");
const MaindataSchema = new mongoose.Schema({
  data1: {
    type: Number,
    required: true,
  },
  data2: {
    type: Number,
    required: true,
  },
  data3: {
    type: Number,
    required: true,
  },
  data4: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("maindata", MaindataSchema);
