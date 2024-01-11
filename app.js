const express = require("express");
const app = express();
const routers = require('./router')




app.use(express.static('public'))
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routers)

app.listen(3000);
