const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const restaurant = require("./models/restaurant.js");

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
  
  
  let foodObject = new restaurant.model();
  // foodObject.id = i;
  // foodObject.name = food_array[i];
  foodObject.save();
  
  // food.model.remove({ id: "2" }, function(err) {
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

