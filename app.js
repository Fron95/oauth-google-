const express = require("express");
const app = express();
const routers = require('./routers/router')


const CLIENT_ID = '940620741583-id2runvk01jsuopi90s92b14rhcl3oqo.apps.googleusercontent.com'
const CLIENT_SECRET = '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'  
const SCOPE = 'https://www.googleapis.com/auth/userinfo.email'
const REDIRECT_URI = 'http://localhost:3000/complete'




app.set("views", __dirname+'/views');
app.set("view engine", "ejs");
app.set(express.urlencoded({ extended: false }));
app.use(routers)

app.listen(3000);
