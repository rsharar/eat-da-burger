// Import MySQL connection.
var connection = require("./connection.js");

// generate questionmarks to use in SQL queries
function generateQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM with 3 methods
var orm = {
    // select all burgers in the burgers table
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            else {
                cb(result);
            }
        })
    },
    // add a new burger to the burgers table using user input
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString();
        queryString += ")";
        queryString += " VALUES (" + generateQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
                cb(result);

        })
    },
    // change the state of a burger to devoured when 'devoured' btn is clicked
    updateOne: function (table, obColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET"
        queryString += objToSql(obColVals);
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            else {
                cb(result);
            }
        })
    }
}
// export orm object
module.exports = orm;