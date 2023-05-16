const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    familyMembers: {
      type: Number,
      require: true,
    },
    partnerName: {
      type: String,
      require: true,
    },
    partnerAge: {
      type: Number,
      require: true,
    },
    kidName: {
      type: String,
      require: true,
    },
    kidAge: {
      type: Number,
      require: true,
    },
    identity: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipient", recipientSchema);
