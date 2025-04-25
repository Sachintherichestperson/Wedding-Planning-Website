const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("Index");
});

app.get("/Services", (req, res) => {
    res.render("Services");
});

app.get("/Contact-us", (req, res) => {
    res.render("Contact-us");
});

app.get("/FAQs", (req, res) => {
    res.render("FAQs");
});

app.get("/About-us", (req, res) => {
    res.render("About-us");
});

app.listen(3000);