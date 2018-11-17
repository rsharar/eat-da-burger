// Require burger model
var burger = require("../models/burger");

// Require express package
var express = require('express');

// express 4.0 documentation
var router = express.Router();

// GET route for index.handlebars
router.get("/", function (req, res) {
    burger.all(function (data) {
        var obj = {
            burgers: data
        }
        // render index.handlebars with data object
        res.render("index", obj);
    })
})
// POST route fired on click of submit btn
router.post("/api/burgers", function(req,res){
    burger.create(["burger_name"],[req.body.burger_name], function(data){
        // console.log(req.body.burger_name);
        res.json({
            id: data.insertId
        });
    })
})

// PUT route to update burger 'devoured' status
router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;
    // console.log(condition);
    burger.update({
        devoured: req.body.devoured
    }), condition, function(data){
        if(data.changedRows === 0){
            return res.status(404).end();
        }
        else{
            return res.status(200).end();
        }
    }
});

// DELETE route
router.delete("/api/burgers/:id", function(req, res){
    var burgerId = "id = " + req.params.id;
    burger.delete(burgerId, function(data){
        if(data.affectedRows === 0){
            return res.status(404).end();
        }
        else{
            return res.status(200).end();
        }
    });
});
module.exports = router;