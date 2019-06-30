const express = require("express");
const restaurant = require("../models/restaurant");

const restaurantRouter = express.Router();

restaurantRouter
  .use((req, res, next) => {
    console.log("you've called restaurants api");
    req.restaurant = {};
    next();
  })
  //ok!
  .get("/restaurants/area/select", (req, res) => {
    var area_query = req.query["area"];
    console.log(area_query);
    var result = [];
    restaurant.model.find({}, (error, foods) => {
      if (error) {
        res.send(error);
      }
      foods.forEach(element => {
        var add = element["address"];
        if (add["area"] == area_query){
          result.push(element);
        }      
      });
      res.send(result);
    });
  })
  //not ok!
  .get("/restaurants", (req, res) => {
    // var area_query = req.query["‫‪area"];
    // var categories_query = req.query["category"];
    // console.log(area_query+"\n"+categories_query);
    // var result = [];
    restaurant.model.find({}, (error, foods) => {
      if (error) {
        res.send(error);
      }
      res.send(foods);
    });
  })

  //ok!
  .get("/restaurants/:id", (req, res) => {
    var param = req.params;
    console.log(param["id"]);
    restaurant.model.find({"id":param["id"]}, (error, results) => {
      if(error){
        res.send(error);
      }
      // res.send(results);
      result = results[0];
      res_comments = result["comments"];
      val = 0;
      res_comments.forEach(element => {
        val = val + (element["packaging"] + element["deliveryTime"])/2;
      });
      console.log(res_comments.length);
      val = val/(res_comments.length);
      //res_comments.length
      result["averageRate"] = val;
      result.save("saved!");
      console.log("val is : ");
      console.log(val);
      res.send(result);
      
    });
    
  })
  .get("/restaurants/:id/comments", (req, res) => {

  })
  .post("/restaurants/:id/comments", (req, res) => {

  })
  //ok!
  .post("/restaurants", (req, res) => {
    let resObject = new restaurant.model();
    resObject.id = req.body.id;
    resObject.name = req.body.name;
    resObject.openingTime = req.body.openingTime;
    resObject.closingTime = req.body.closingTime;
    resObject.address = req.body.address;
    resObject.categories = req.body.categories;
    resObject.averageRate = req.body.averageRate;
    resObject.foods = req.body.foods;
    resObject.comments = req.body.comments;
    
    resObject.save();
    res.json({
      message: "success"
    });
    
  });
  
module.exports = restaurantRouter;
