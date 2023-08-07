const express = require("express");
const Servicepage = require("../models/Servicepage");
const router = express.Router();
const cors = require("cors");
router.post("/servicepage", cors(), async (req, res) => {
  try {
    const servicepage = await Servicepage.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + servicepage);
    // users.push(user);
    res.send(`Servicepage Data have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/servicepage", cors(), async (req, res) => {
  try {
    const servicepage = await Servicepage.find();
    res.send(servicepage);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/servicepage/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const servicepage = await Servicepage.findById(_id);
    res.send(servicepage);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/servicepage/:id", cors(), async (req, res) => {
    try {
        const _id = req.params.id;
        const servicepage = await Servicepage.findByIdAndUpdate(_id, req.body, {
            new: true
    });
    res.send(servicepage);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
