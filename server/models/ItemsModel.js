const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String },
  price: { type: String },
  image: { type: String },
  description: { type: String },
});

const ItemsModel = mongoose.model("items", ItemSchema);

module.exports = ItemsModel;
