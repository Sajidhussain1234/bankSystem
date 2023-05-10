const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://sajid:VmSkQEeF3e2s9MGm@cluster0.davbvrm.mongodb.net/bank-DB?retryWrites=true&w=majority";

// Made connection with database atalas
const connectToMongoDB = () => {
  // Made connection with database atalas
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB", error));
};
module.exports = connectToMongoDB;