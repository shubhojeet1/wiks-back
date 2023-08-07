const express = require("express");
const Client = require("../models/ClientsData");
const router = express.Router();
const cors = require("cors");
router.post("/clients", cors(), async (req, res) => {
  try {
    const client = await Client.create(req.body);
    //console.log(user)
    //const savedUser = await user.save();
    console.log("saved" + client);
    // users.push(user);
    res.send(`Clients have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/clients", cors(), async (req, res) => {
  try {
    const clients = await Client.find();
    res.send(clients);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/clients/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const client = await Client.findById(_id);
    res.send(client);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/clients/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const client = await Client.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(client);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
