const Item = require("../models/Items");
const mongoose = require("mongoose");

const getAllItem = async (req, res, next) => {
  try {
    const item = await Item.find();

    if (!item) {
      res.status(404).json({ message: "not find item" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the item" });
  }
};

const CreateItem = async (req, res, next) => {
  const { name, category, quantity, inventoryStatus, additionalInformation } =
    req.body;
  try {
    const item = await Item.create({
      name,
      category,
      quantity,
      inventoryStatus,
      additionalInformation,
    });

    if (item) {
      res.status(201).json({
        _id: item._id,
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        inventoryStatus: item.inventoryStatus,
        additionalInformation: item.additionalInformation,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Failing to create the item" });
  }
};
module.exports = {
  getAllItem,
  CreateItem,
};
