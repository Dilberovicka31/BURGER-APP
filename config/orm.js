const connection = require("../config/connection.js");

//Create question marks
function printQmarks(num) {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objectTranslate(ob) {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof calue === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
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
      "INSERT INTO " +
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

  updateBurger: function (table, objValues, condition, callback) {
    var sqlQuery =
      "UPDATE " +
      table +
      " SET " +
      objectTranslate(objValues) +
      " WHERE " +
      condition;

    console.log(sqlQuery);

    connection.query(sqlQuery, function (err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
};
module.exports = orm;
