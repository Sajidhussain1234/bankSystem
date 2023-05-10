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
    },
    // history: [{
    //   type: String,
    //   enum: ['deposit', 'withdrawal'],
    //   required: true,
    // }],
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", schema);

module.exports = Account;
