const Kit = require("../models/Kits");
const mongoose = require("mongoose");

const getAllKit = async (req, res, next) => {
  try {
    const kit = await Kit.find();

    if (!kit) {
      res.status(404).json({ message: "not find Kit" });
    }
    res.status(200).json(kit);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the Kit" });
  }
};

const CreateKit = async (req, res, next) => {
  const {
    name,
    composition1,
    quantity1,
    composition2,
    quantity2,
    composition3,
    quantity3,
  } = req.body;
  try {
    const kit = await Kit.create({
      name,
      composition1,
      quantity1,
      composition2,
      quantity2,
      composition3,
      quantity3,
    });

    if (kit) {
      res.status(201).json({
        _id: kit._id,
        name: kit.name,
        composition1: kit.composition1,
        quantity1: kit.quantity1,
        composition2: kit.composition2,
        quantity2: kit.quantity2,
        composition3: kit.composition3,
        quantity3: kit.quantity3,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Failing to create the kit" });
  }
};
module.exports = {
  getAllKit,
  CreateKit,
};
