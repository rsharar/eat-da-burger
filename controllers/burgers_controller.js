// Require burger model
var burger = require("../models/burger");

// Require express package
var express = require('express');

// express 4.0 documentation
var router = express.Router();

// create route for index.handlebars
router.get("/", function (req, res) {
    burger.all(function (data) {
        var obj = {
            burgers: data
        }
        // render index.handlebars with data object
        res.render("index", obj);
    })
})

module.exports = router;