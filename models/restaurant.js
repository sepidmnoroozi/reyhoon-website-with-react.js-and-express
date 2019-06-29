const mongoose = require("mongoose");
const food = require("./food");
const address = require("./address.js");
const category = require("./category.js");
const comment = require("./comment.js");

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    logo: String,
    openingTime : Number,
    closingTime : Number,
    averageRate : Number,
    address : address.Schema,
    categories : [category.Schema],
    foods: [food.schema],
    comments : [comment.Schema]
});

module.exports = {
    schema: restaurantSchema,
    model: mongoose.model("restaurant", restaurantSchema)
};