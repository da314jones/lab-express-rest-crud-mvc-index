const express = require("express");

const persons = express.Router();

const personsData = require("../models/person.model");

persons.get("/", (req, res) => {
    console.log("sending all persons data")
    res.send(personsData);
})


module.exports = persons