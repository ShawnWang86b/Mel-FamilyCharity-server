const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    //(Low / Medium / High / Excess)
    inventoryStatus: {
      type: String,
      require: true,
    },
    additionalInformation: {
      // xxl,xl,ingredient,expire date
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
