const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = 8080;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost/asgn")
//     .once("open", () => console.log("DB connection successful"))
//     .on("error", (error) => console.log("Error:", error));

// app.use("/", router);

app.listen(port, function () {
    console.log("Server launched on port " + port);
});