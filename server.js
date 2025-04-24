const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/Services", (req, res) => {
    res.sendFile(path.join(__dirname, "Services.html"));
});

app.get("/Contact-us", (req, res) => {
    res.sendFile(path.join(__dirname, "Contact-us.html"));
})

app.get("/FAQs", (req, res) => {
    res.sendFile(path.join(__dirname, "FAQs.html"));
});

app.get("/About-us", (req, res) => {
    res.sendFile(path.join(__dirname, "About-us.html"));

});

app.listen(3000);