const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

var day = require(__dirname + "/views/date.js");
day = day.getDate();

var currTime = require(__dirname + "/views/time.js");
currTime = currTime.getTime();


app.get("/", (req, res) => {
    res.render("home", { today: day, curr: currTime });
})

app.get("/Today", (req, res) => {
    res.render("list", {listTitle: "Today"});
})
app.get("/Tomorrow", (req, res) => {
    res.render("list", {listTitle: "Tomorrow"});
})
app.get("/thisWeek", (req, res) => {
    res.render("list", {listTitle: "This Week"});
})
app.get("/nextWeek", (req, res) => {
    res.render("list", {listTitle: "Next Week"});
})
app.get("/lectureList", (req, res) => {
    res.render("list", {listTitle: "Lecture List"});
})
app.get("/readingList", (req, res) => {
    res.render("list", {listTitle: "Reading List"});
})
app.get("/assignmentList", (req, res) => {
    res.render("list", {listTitle: "Assignment List"});
})
app.get("/shoppingList", (req, res) => {
    res.render("list", {listTitle: "Shopping List"});
})
app.get("/clubList", (req, res) => {
    res.render("list", {listTitle: "Club List"});
})
app.get("/showList", (req, res) => {
    res.render("list", {listTitle: "Show List"});
})
app.get("/travellingList", (req, res) => {
    res.render("list", {listTitle: "Travelling List"});
})
app.get("/healthList", (req, res) => {
    res.render("list", {listTitle: "Health List"});
})


app.listen(3000, function () {
    console.log("Server started on port 3000.");
});