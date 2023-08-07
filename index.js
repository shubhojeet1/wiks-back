const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);
app.use(
  cors({
    origin: ["https://www.section.io", "https://www.google.com/"],
  })
);

const port = 8080;
app.use(bodyParser.json());

mongoose.connect(
  `mongodb+srv://codekwiks:Ashish123@cluster0.rn5ouen.mongodb.net/codekwiks?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else {
      console.log("connected to database");
    }
  }
);
app.use("/", require(path.join(__dirname, "routes/users.js")));
app.use("/", require(path.join(__dirname, "routes/techs.js")));
app.use("/", require(path.join(__dirname, "routes/services.js")));
app.use("/", require(path.join(__dirname, "routes/testimonials.js")));
app.use("/", require(path.join(__dirname, "routes/servicepage.js")));
app.use("/", require(path.join(__dirname, "routes/projects.js")));
app.use("/", require(path.join(__dirname, "routes/maindata.js")));
app.use("/", require(path.join(__dirname, "routes/clientdata.js")));
// Step 1:
app.use(express.static(path.resolve(__dirname, "../build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
