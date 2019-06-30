const express = require("express");
const restaurant = require("../models/restaurant");

const restaurantRouter = express.Router();

restaurantRouter
  .use((req, res, next) => {
    console.log("you've called restaurants api");
    req.restaurant = {};
    next();
  })
  .get("/restaurants/area/select", (req, res) => {
    var area_query = req.query["‫‪area"];
    // var categories_query = req.query["category"];
    console.log(area_query);
    restaurant.model.find({ area : area_query }, (error, foods) => {
      if (error) {
        res.send(error);
      }
      res.send(foods);
    });
  })
  .get("/restaurants", (req, res) => {
    var area_query = req.query["‫‪area"];
    var categories_query = req.query["category"];
    console.log(area_query+"\n"+categories_query);
    var result = [];
    for (i=0;i<this.length(categories_query);i++){
      restaurant.model.find({ category : categories_query[i] }, (error, foods) => {
        if (error) {
          console.log("gandiiii");
          res.send(error);
        }
        console.log("hale cheshat");
        result.push(foods);
      });
    }
    
  })
  .get("/restaurants/:id", (req, res) => {

  })
  .get("/restaurants/:id/comments", (req, res) => {

  })
  .post("/restaurants/:id/comments", (req, res) => {

  })
  .post("/restaurants", (req, res) => {
    let resObject = new restaurant.model();
    resObject.id = req.body.id;
    resObject.name = req.body.name;
    resObject.openingTime = req.body.openingTime;
    resObject.closingTime = req.body.closingTime;
    resObject.address = req.body.address;
    resObject.categories = req.body.categories;
    resObject.save();
    res.json({
      message: "success"
    });
    
  });
  
module.exports = restaurantRouter;
