const express = require("express");
const Tech = require("../models/Tech");
const router = express.Router();
const cors = require("cors");
router.post("/techs", cors(), async (req, res) => {
    try {
    const tech = await Tech.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + tech);
    // users.push(user);
    res.send(
      `Technologies have been added to the database.`
    );
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/techs", cors(), async (req, res) => {
  try {
    const techs = await Tech.find();
    res.send(techs);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/techs/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const tech = await Tech.findById(_id);
    res.send(tech);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/techs/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const techs = await Tech.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(techs);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
