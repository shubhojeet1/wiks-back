const mongoose = require("mongoose");
const TestimonialSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bool: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("testimonial", TestimonialSchema);
