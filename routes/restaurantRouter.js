const express = require("express");
const restaurant = require("../models/restaurant");
const comment = require("../models/comment");
var arraySort = require('array-sort');

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
  //ok!
  .get("/restaurants", (req, res) => {
    var q = req.query;
    var q_a = q.area;
    var q_c_l = q.category;
    if (q_a != null && q_c_l!=null){
      console.log("YES YES");
      restaurant.model.find({'address.area':req.query.area}, (error, results) => {
        if (error) {
          res.send(error);
        }
        var res_final = [];
        if(typeof q_c_l === 'string'){
          console.log("1 done");
          results.forEach(element1 => {
            var cats = element1.categories;
            cats.forEach(element2 => {
              if (element2.id == q_c_l){
                res_final.push(element1.name);
              }
            });
          });
        }
        else{
          console.log("list dadi dadash");
          var flag = 0;
          var i_cats = q_c_l;
          results.forEach(re => {
            var re_cats = re.categories;
            console.log(re.id);
            re_cats.forEach(re_cat => {
              if(flag==1){
                return false;
              }
              i_cats.forEach(i_cat => {
                if(i_cat == re_cat.id){
                  res_final.push(re.name);
                  flag = 1;
                }
                if(flag == 1){
                  return false;
                }
              });
            });
          });
        }
        res.send(res_final);
      });
    }
    else if (q_a == null && q_c_l!=null){
      console.log("NO YES");
      restaurant.model.find({}, (error, results) => {
        if (error) {
          res.send(error);
        }
        var res_final = [];
        if(typeof q_c_l === 'string'){
          console.log("1 done");
          results.forEach(element1 => {
            var cats = element1.categories;
            cats.forEach(element2 => {
              if (element2.id == q_c_l){
                res_final.push(element1.name);
              }
            });
          });
        }
        else{
          console.log("list dadi dadash");
          var flag = 0;
          var i_cats = q_c_l;
          results.forEach(re => {
            var re_cats = re.categories;
            console.log(re.id);
            re_cats.forEach(re_cat => {
              if(flag==1){
                return false;
              }
              i_cats.forEach(i_cat => {
                if(i_cat == re_cat.id){
                  res_final.push(re.name);
                  flag = 1;
                }
                if(flag == 1){
                  return false;
                }
              });
            });
          });
        }
        res.send(res_final);
      });
      
    }
    else if(q_a != null && q_c_l==null){
      console.log("YES NO");
      restaurant.model.find({'address.area':req.query.area}, (error, results) => {
        if (error) {
          res.send(error);
        }
        res.send(results);
      });

    }
    else{
      console.log("NO NO");
      restaurant.model.find({}, (error, results) => {
        if (error) {
          res.send(error);
        }
        res.send(results);
      });  
    }

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
      arraySort(res_comments, 'created_at', {reverse: true});
      res.send(res_comments);

    });

    
  })
  .post("/restaurants/:id/comments", (req, res) => {
    console.log("ommad to comment post");
    let commentObject = new comment.model();
    commentObject.id = req.body.id;
    commentObject.author = req.body.author;
    commentObject.packaging = req.body.packaging;
    commentObject.deliveryTime = req.body.deliveryTime;
    commentObject.text = req.body.text;
    commentObject.save();

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
      res_comments.push(commentObject);
      result["comments"] = res_comments;
      result.save();
      console.log("val is : ");
      console.log(val);
      res.send("hale");

    })
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
