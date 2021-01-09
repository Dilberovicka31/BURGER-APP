const connection = require("../config/connection.js");

//Create question marks
function printQmarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
const orm = {
  selectAll: function (table, callback) {
    const sqlQuery = "SELECT * FROM " + table + ";";
    connection.query(sqlQuery, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertBurger: function (table, columns, values, callback) {
    const sqlQuery =
      "INSERT INTO" +
      table +
      "(" +
      columns.toString() +
      ")" +
      "VALUES (" +
      printQmarks(values.length) +
      ")";

    console.log(sqlQuery);

    connection.query(sqlQuery, values, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateBurger: function (table, values, condition, callback) {
    const sqlQuery =
      "UPDATE" + table + "SET" + values + " ? " + "WHERE" + condition;
    console.log(sqlQuery);
    connection.query(sqlQuery, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
};
module.exports = orm;
