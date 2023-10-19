const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{console.log(`Listening on PORT ${PORT}`)});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/digital-battle", (req, res) => {
  res.render("digitalbattle");
});

app.get("/enliven", (req, res) => {
  res.render("enliven");
});

app.get("/techbyheart", (req, res) => {
  res.render("techbyheart");
});

app.get("/react-bootcamp", (req, res) => {
  res.render("reactbootcamp");
});

app.use((req, res) => {
  res.redirect("/");
});

module.exports = app;
