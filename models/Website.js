const mongoose = require("mongoose");
const WebsiteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  btn: {
    type: String,
    required: true,
  },
  images: [
    {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    {
      id: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("websiteData", WebsiteSchema);
