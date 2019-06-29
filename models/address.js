const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  id: String,
  city : String,
  area : String,
  addressLine : String
});

module.exports = {
  schema: addressSchema,
  model: mongoose.model("address", addressSchema)
};