const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: String,
  name: String
});

module.exports = {
  schema: categorySchema,
  model: mongoose.model("category", categorySchema)
};