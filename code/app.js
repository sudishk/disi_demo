
const path = require('path')

const express = require('express');

const app =express();

const routs = require('./routs/routs');
const cons = require('./database/db');
const res = require('express/lib/response');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static("public"))

//app.engine('pug', require('pug').__express)

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", routs)

app.listen(3001, ()=>{
    console.log("Port 3001 is running");
});