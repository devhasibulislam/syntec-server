// external import
const mongoose = require("mongoose");

// DB connect with Mongoose
function dbConnection() {
  mongoose
    .connect(process.env.DB_LOCAL, {
      dbName: "syntec",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Success: MongoDB connected with Mongoose");
    })
    .catch((error) => console.log(`Error: ${error.name}`));
}

module.exports = dbConnection;
