import DatabaseConnectionHandler from "./Database/DatabaseConnectionHandler.js";

import express from "express";
const app = express();
import bodyParser from "body-parser";
const portNum = 3001;

var databaseConnectionHandler
function databaseSetup () {
    databaseConnectionHandler = new DatabaseConnectionHandler();
}
databaseSetup();
app.use(bodyParser.urlencoded({extended: true}));
var jsonParser = bodyParser.json();
app.get("/hello", function(req, res) {
    res.status(200).send("Welcome to Mango Storage Management System");
});
app.post("/customer/add", jsonParser, function(req, res) {
    databaseConnectionHandler.addCustomer(req.body.cName, req.body.phoneNum);
    res.status(200).send("Welcome to Mango Storage Management System");
});
app.listen(portNum, function() {
    console.log("Init Server on Port " + portNum);
});