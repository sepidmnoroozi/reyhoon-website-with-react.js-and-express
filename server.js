const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// const food = require("./models/food.js");

mongoose.connect("mongodb://localhost/reyhoon", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
//   var food_array = ["english","france","german"];
//   for(i=0;i<3;i++){
//     let foodObject = new food.model();
//     foodObject.id = i;
//     foodObject.name = food_array[i];
//     foodObject.save();
//   }
});

app.use(express.json());

//routers
// const foodRouter = require("./routes/foodRouter.js");
// app.use("/api/foods", foodRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));