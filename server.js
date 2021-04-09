const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const portNum = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.get("/hello", function(req, res) {
    res.send("Hello World");
});
app.listen(portNum, function() {
    console.log("Init Server on Port " + portNum);
});