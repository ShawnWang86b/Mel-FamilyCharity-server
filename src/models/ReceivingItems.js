const mongoose = require("mongoose");

const receivingItemSchema = new mongoose.Schema(
  {
    donor: { type: String },
    item: { type: String, require: true },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ReceivingItem", receivingItemSchema);
