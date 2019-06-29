const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    id: String,
    author: String,
    packaging : Number,
    deliveryTime : Number,
    text : String,
    created_at : Date
});

module.exports = {
    schema: commentSchema,
    model: mongoose.model("comment", commentSchema)
};