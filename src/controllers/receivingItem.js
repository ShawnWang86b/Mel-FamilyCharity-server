const ReceivingItem = require("../models/ReceivingItems");
const mongoose = require("mongoose");

const getAllReceivingItem = async (req, res, next) => {
  try {
    const receivingItem = await ReceivingItem.find();

    if (!receivingItem) {
      res.status(404).json({ message: "not find receivingItem" });
    }
    res.status(200).json(receivingItem);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the receivingItem" });
  }
};

const CreateReceivingItem = async (req, res, next) => {
  const { donor, item, quantity } = req.body;
  try {
    const receivingItem = await ReceivingItem.create({
      donor,
      item,
      quantity,
    });

    if (receivingItem) {
      res.status(201).json({
        _id: receivingItem._id,
        donor: receivingItem.donor,
        item: receivingItem.item,
        quantity: receivingItem.quantity,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Failing to create the receivingItem" });
  }
};
module.exports = {
  getAllReceivingItem,
  CreateReceivingItem,
};
