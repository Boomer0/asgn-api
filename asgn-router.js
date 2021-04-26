let router = require('express').Router();
const controller = require("./asgn-controller.js");

router.get("/", function (req, res) {
    res.send("API is up and running");
})