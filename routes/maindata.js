const express = require("express");
const Data = require("../models/Maindata");
const router = express.Router();
const cors = require("cors");
router.post("/data", cors(), async (req, res) => {
  try {
    const data = await Data.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + data);
    // users.push(user);
    res.send(`Main Data have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/data", cors(), async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
