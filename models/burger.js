// Import and require ORM object
var orm = require('../config/orm.js');


// code to call the ORM functions using the burger specific input for the ORM
var burger = {
    all: function(cb){
    // "burgers" will be table name used in SQL queries
        orm.selectAll("burgers", function(res){
            console.log(res);
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            console.log(res);
            cb(res);
        })
    },
    update: function(obColVals, condition, cb){
        orm.updateOne("burgers", obColVals, condition, function(res){
            console.log(res);
            cb(res);
        })
    }
}



// export 
module.exports = burger;