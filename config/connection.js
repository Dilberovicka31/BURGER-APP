const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PASSWORD",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id" + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
