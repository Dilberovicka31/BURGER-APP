const express = require("express");
const router = express.Router();

//Import module burger.js
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
      console.log(data);
      res.render("index", {
        burgers: data,
      });
    });
  });