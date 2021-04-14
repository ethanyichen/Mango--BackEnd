import DatabaseConnectionHandler from "./Database/DatabaseConnectionHandler.js";

import express from "express";
const app = express();
import bodyParser from "body-parser";
const portNum = 3001;

function databaseSetup () {
    var databaseConnectionHandler = new DatabaseConnectionHandler();
}
databaseSetup();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/hello", function(req, res) {
    res.status(200).send("Welcome to Mango Storage Management System");
});
app.listen(portNum, function() {
    console.log("Init Server on Port " + portNum);
});