const express = require("express");
const Websitepage = require("../models/Website");
const router = express.Router();
const cors = require("cors");
router.post("/website", cors(), async (req, res) => {
  try {
    const website = await Websitepage.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + website);
    // users.push(user);
    res.send(`Website Data have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/website", cors(), async (req, res) => {
  try {
    const website = await Websitepage.find();
    res.send(website);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/website/:id", cors(), async (req, res) => {
  try {
    const id = req.params.id;
    const website = await Websitepage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(website);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
