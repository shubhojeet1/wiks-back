const express = require("express");
const Testimonial = require("../models/Testimonials");
const router = express.Router();
const cors = require("cors");
router.post("/testimonials", cors(), async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + testimonial);
    // users.push(user);
    res.send(`Testimonials have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/testimonials", cors(), async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.send(testimonials);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/testimonials/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const testimonial = await Testimonial.findById(_id);
    res.send(testimonial);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/testimonials/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const testimonial = await Testimonial.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(testimonial);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
