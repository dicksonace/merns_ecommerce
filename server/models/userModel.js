const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScema = new Schema({
  firstname: { type: String },
  surname: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

const userCollection = mongoose.model("users", userScema);

module.exports = userCollection;
