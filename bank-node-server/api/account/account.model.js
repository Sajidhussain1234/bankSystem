const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: true,
      unique: true
    },
    balance: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", schema);

module.exports = Account;
