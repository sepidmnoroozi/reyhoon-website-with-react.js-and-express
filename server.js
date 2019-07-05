const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const restaurant = require("./models/restaurant.js");
const address = require("./models/address.js");
const category = require("./models/category.js");
const comment = require("./models/comment.js");
const food = require("./models/food.js");

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");

  // var new_address1 = new address.model({
  //   id: "1",
  //   city: "tehran",
  //   area: "jordan",
  //   addressLine: "تهران جردن کوچه ۹"
  // });
  // new_address1.save();
  // var new_address2 = new address.model({
  //   id: "2",
  //   city: "tehran",
  //   area: "jordan",
  //   addressLine: "تهران جردن کوچه ۴"
  // });
  // new_address2.save();
  // var new_address3 = new address.model({
  //   id: "3",
  //   city: "tehran",
  //   area: "mirdamad",
  //   addressLine: "تهران میرداماد کوچه ۵"
  // });
  // new_address3.save();
  // var new_address4 = new address.model({
  //   id: "4",
  //   city: "tehran",
  //   area: "mirdamad",
  //   addressLine: "تهران میرداماد کوچه 6"
  // });
  // new_address4.save();
  // var new_address5 = new address.model({
  //   id: "5",
  //   city: "tehran",
  //   area: "mirdamad",
  //   addressLine: "تهران میرداماد کوچه 7"
  // });
  // new_address5.save();
  // var new_address6 = new address.model({
  //   id: "6",
  //   city: "tehran",
  //   area: "mirdamad",
  //   addressLine: "تهران میرداماد کوچه 8"
  // });
  // new_address6.save();

  // var new_category2 = new category.model({ id: "kebab", name: "کباب" });
  // new_category2.save();
  // var new_category3 = new category.model({ id: "salad", name: "سالاد" });
  // new_category3.save();
  // var new_category4 = new category.model({ id: "fastfood", name: "فست فود" });
  // new_category4.save();

  // var new_food1 = new food.model({
  //   id: "1",
  //   name: "برگر تنوی",
  //   price: 38000,
  //   description: "برگر با قارچ و پنیر",
  //   foodSet: "burger"
  // });
  // new_food1.save();

  // var new_food2 = new food.model({
  //   id: "2",
  //   name: "دبل برگر",
  //   price: 35000,
  //   description: "دو تا برگر  عادی ",
  //   foodSet: "burger"
  // });
  // new_food2.save();

  // var new_food3 = new food.model({
  //   id: "3",
  //   name: "پیتزا مخلوط",
  //   price: 30000,
  //   description: "یه پیتزای عادی",
  //   foodSet: "pizza"
  // });
  // new_food3.save();

  // var new_food4 = new food.model({
  //   id: "4",
  //   name: "پیتزای پپرونی",
  //   price: 28000,
  //   description: "پیتزا با یه عالمه پپرونی",
  //   foodSet: "pizza"
  // });
  // new_food4.save();

  // var new_comment1 = new comment.model({
  //   id: "1",
  //   author: "sepide",
  //   packaging: 2,
  //   deliveryTime: 2,
  //   text: "خیلی بد بود  داغون اصن",
  //   created_at: Date.now()
  // });
  // new_comment1.save();

  // var new_comment2 = new comment.model({
  //   id: "2",
  //   author: "sara",
  //   packaging: 3,
  //   deliveryTime: 3,
  //   text: "بد نبود",
  //   created_at: Date.now()
  // });
  // new_comment2.save();

  // var new_comment3 = new comment.model({
  //   id: "3",
  //   author: "aysan",
  //   packaging: 4,
  //   deliveryTime: 4,
  //   text: "خوب بود راضیم",
  //   created_at: Date.now()
  // });
  // new_comment3.save();

  // var new_restaurant1 = new restaurant.model({
  //   id: "vitrin",
  //   name: "ویترین",
  //   logo: "v.jpg",
  //   openingTime: 10,
  //   closingTime: 23,
  //   averageRate: 3,
  //   address: new_address6,
  //   categories: [new_category2, new_category3],
  //   foods: [new_food1, new_food2, new_food3, new_food4],
  //   comments: [new_comment1, new_comment2, new_comment3]
  // });
  // new_restaurant1.save();

  // var new_restaurant2 = new restaurant.model({
  //   id: "shandiz",
  //   name: "شاندیز",
  //   logo: "sh.jpg",
  //   openingTime: 9,
  //   closingTime: 23,
  //   averageRate: 3,
  //   address: new_address5,
  //   categories: [new_category3, new_category4],
  //   foods: [],
  //   comments: []
  // });
  // new_restaurant2.save();

  // var new_restaurant3 = new restaurant.model({
  //   id: "halim",
  //   name: "حلیم",
  //   logo: "h.jpg",
  //   openingTime: 1,
  //   closingTime: 4,
  //   averageRate: 4,
  //   address: new_address4,
  //   categories: [new_category2, new_category4],
  //   foods: [],
  //   comments: []
  // });
  // new_restaurant3.save();

  // var new_restaurant4 = new restaurant.model({
  //   id: "sepid",
  //   name: "سپید",
  //   logo: "s.jpg",
  //   openingTime: 1,
  //   closingTime: 4,
  //   averageRate: 3,
  //   address: new_address3,
  //   categories: [new_category2, new_category3, new_category4],
  //   foods: [],
  //   comments: []
  // });
  // new_restaurant4.save();

  // category.model.remove({}, function(err) {
  //   if (!err) {
  //     console.log("remoded");
  //   } else {
  //     console.log("not removed");
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
