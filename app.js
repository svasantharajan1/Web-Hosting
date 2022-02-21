const express = require('express')
const path = require("path");
require("/Users/sharm/Desktop/WEB322/NodeJsSite/conn.js");
const hbs = require("hbs");
const { registerPartials } = require('hbs');

const app = express()
const port = process.env.PORT || 3000;
// Static Files

// Setting the path
const staticpath = path.join(__dirname, "/public");
const tempplatepath = path.join(__dirname, "/src/templates/views");
const partialpath = path.join(__dirname, "/src/templates/partials");
//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs"); 
app.set("views", tempplatepath);
hbs.registerPartials(partialpath);


// Routes

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/home", (req,res)=>{
    res.render("home");
})

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/registration", (req,res)=>{
    res.render("registration")
})

app.get("/plans", (req,res)=>{
    res.render("plans")
})

//Listen to port 5000
app.listen(port, ()=> console.log(`Listening on port ${port}`))
