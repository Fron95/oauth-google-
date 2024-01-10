const express = require("express");
const app = express();
const routers = require('./router')




app.use(express.static('public'))
app.set("views", __dirname);
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));
app.set(express.json());
app.use(routers)

app.listen(3000);
