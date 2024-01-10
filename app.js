const express = require("express");
const app = express();

app.set("views", __dirname);
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));

app.use("/", function (req, res) {
  return res.render("main");
});

app.listen(3000);
