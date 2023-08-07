const express = require("express");
const Service = require("../models/Service");
const router = express.Router();
const cors = require("cors");
router.post("/services", cors(), async (req, res) => {
  try {
    const service = await Service.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + service);
    // users.push(user);
    res.send(`Services have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/services", cors(), async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/services/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const service = await Service.findById(_id);
    res.send(service);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/services/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const services = await Service.findOneAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(services);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
