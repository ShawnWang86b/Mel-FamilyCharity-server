const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const donorRoutes = require("../src/routes/donorRoutes");
const recipientRoutes = require("../src/routes/recipientRoutes");
const itemRoutes = require("../src/routes/itemRoutes");
const kitRoutes = require("../src/routes/kitRoutes");
const requisitionRoutes = require("../src/routes/requisitionRoutes");
const receivingItemRoutes = require("../src/routes/receivingItemsRoutes");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://mel-family-charity-dmfz.vercel.app/",
];

const options = {
  origin: allowedOrigins,
  credentials: true,
};
app.use(cors(options));

app.use(express.json());

app.use("/api/donor", donorRoutes);
app.use("/api/recipient", recipientRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/kit", kitRoutes);
app.use("/api/requisition", requisitionRoutes);
app.use("/api/receivingItem", receivingItemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.set("strictQuery", true);
mongoose.set("runValidators", true);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(console.error);
