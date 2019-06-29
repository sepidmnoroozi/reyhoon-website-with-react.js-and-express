const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  id: String,
  name: String,
  price : Number,
  description : String,
  foodSet : String
});

module.exports = {
  schema: foodSchema,
  model: mongoose.model("food", foodSchema)
};