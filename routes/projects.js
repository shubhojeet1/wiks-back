const express = require("express");
const Project = require("../models/Projects");
const router = express.Router();
const cors = require("cors");
router.post("/projects", cors(), async (req, res) => {
  try {
    const project = await Project.create(req.body);
    console.log("saved" + project);
    res.send(`Project Data have been added to the database.`);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/projects", cors(), async (req, res) => {
  try {
    const project = await Project.find();
    res.send(project);
  } catch (e) {
    console.log(e.message);
  }
});
router.get("/projects/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const project = await Project.findById(_id);
    res.send(project);
  } catch (e) {
    console.log(e.message);
  }
});
router.patch("/projects/:id", cors(), async (req, res) => {
  try {
    const _id = req.params.id;
    const project = await Project.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(project);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
