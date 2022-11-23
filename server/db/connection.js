const mongoose = require("mongoose");

const connect = mongoose
  .connect(process.env.CONNECTION_URL)
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Database connection error: ${err}`);
  });

module.exports = connect;
