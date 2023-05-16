const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    mailingAddress: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    organizationName: {
      type: String,
      require: true,
    },
    headquarter: {
      type: String,
      require: true,
    },
    contactPerson: {
      type: String,
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
module.exports = mongoose.model("Donor", donorSchema);
