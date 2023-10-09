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

app.listen(PORT);

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.render("index");
});

app.use((req, res) => {
  res.redirect("/api");
});

module.exports = app;
