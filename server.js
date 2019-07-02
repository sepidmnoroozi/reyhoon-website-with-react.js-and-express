const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const restaurant = require("./models/restaurant.js");
const address = require("./models/address.js");
const category = require("./models/category.js");
const comment = require("./models/comment.js");

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");

  // var new_address = new address.model({id:"1", city:"tehran", area: "jordan", addressLine:"تهران جردن کوچه ۹"});
  // new_address.save();
  // var new_category2 = new category.model({id:"kebab", name : "کباب"});
  // new_category2.save();
  // var new_category3 = new category.model({id:"salad", name : "سالاد"});
  // new_category3.save();
  // var new_category4 = new category.model({id:"fastfood", name : "فست فود"});
  // new_category4.save();

  // var new_restaurant2 = new restaurant.model({id:"shandiz-jordan", name:"جردن", logo: "3.jpg", openingTime: 12, closingTime: 20,
  // averageRate:3, address: new_address, categories: [new_category2,new_category3,new_category4], foods:[], comments : []});
  // new_restaurant2.save();

  // restaurant.model.remove({}, function(err) {
  //   if (!err) {
  //           console.log("remoded");
  //   }
  //   else {
  //           console.log("not removed");
  //   }
  // });
});

app.use(express.json());

//routers
const foodRouter = require("./routes/foodRouter.js");
app.use("/api/foods", foodRouter);

const restaurantRouter = require("./routes/restaurantRouter.js");
app.use("/api", restaurantRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
