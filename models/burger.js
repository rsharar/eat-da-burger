// Import and require ORM object
var orm = require('../config/orm.js');


// code to call the ORM functions using the burger specific input for the ORM
var burger = {
    all: function(cb){
    // "burgers" will be table name used in SQL queries
        orm.selectAll("burgers", function(res){
            // console.log(res);
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            // console.log(res);
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            // console.log(res);
            cb(res);
        })
    },
    delete: function(burgerId, cb){
        orm.delete("burgers", burgerId, function(res){
            cb(res);
        })
    }
}
// export 
module.exports = burger;