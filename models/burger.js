// Import and require ORM object
var orm = require('../config/orm.js');


// code to call the ORM functions using the burger specific input for the ORM
var burger = {
    all: function(callback2){
    // "burgers" will be table name used in SQL queries
        orm.selectAll("burgers", function(res){
            callback2(res);
        })
}
}


// export 
module.exports = burger;