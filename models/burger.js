//Import orm
const orm = require("../config/orm.js");

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (result) {
      callback(result);
    });
  },
  insertBurger: function (columns, values, callback) {
    orm.insertBurger("burgers", columns, values, function (response) {
      callback(response);
    });
  },
  updateBurger: function (values, condition, callback) {
    orm.updateBurger("burgers", values, condition, function (response) {
      callback(response);
    });
  },
};
//Export module
module.exports = burger;
