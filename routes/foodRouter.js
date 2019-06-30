const express = require("express");
const food = require("../models/food.js");

const foodRouter = express.Router();

foodRouter
  .use((req, res, next) => {
    console.log("you've called food api");
    req.restaurant = {};
    next();
  })
  .get("/", (req, res) => {
    food.model.find({}, (error, foods) => {
      if (error) {
        console.log("gandiiii");
        res.send(error);
      }
      console.log("hale cheshat");
      res.send(foods);
    });
  })
  .post("/", (req, res) => {
    let foodObject = new food.model();
    foodObject.id = req.body.id;
    foodObject.name = req.body.name;
    foodObject.save();
    res.json({
      message: "success"
    });
  });
module.exports = foodRouter;
