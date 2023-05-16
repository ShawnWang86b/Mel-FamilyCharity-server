const mongoose = require("mongoose");

const kitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    composition1: { type: String },
    quantity1: { type: Number },
    composition2: { type: String },
    quantity2: { type: Number },
    composition3: { type: String },
    quantity3: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Kit", kitSchema);
