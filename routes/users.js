const express = require("express");
const mail = require("../mail");
const User = require("../models/User");
const router = express.Router();
const cors = require("cors");

router.get("/users", cors(), async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/users", cors(), async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("saved", user);
    mail(user.firstName, user.email, user.message);
    res.send(
      `user with the name ${user.firstName} has been added to the database.`
    );
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
