const mongoose = require("mongoose");
const { Schema } = mongoose;

const requisitionSchema = new mongoose.Schema(
  {
    recipientName: { type: String, require: true },
    item: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Requisition", requisitionSchema);
