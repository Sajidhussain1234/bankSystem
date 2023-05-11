const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    mobileNumber:{
      type: Number,
      required: true
    },
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role",
    //   },
    // ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", schema);

module.exports = User;
