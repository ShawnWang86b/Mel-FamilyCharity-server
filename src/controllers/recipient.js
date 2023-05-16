const Recipient = require("../models/Recipients");
const mongoose = require("mongoose");

const getAllRecipient = async (req, res, next) => {
  try {
    const recipient = await Recipient.find();

    if (!recipient) {
      res.status(404).json({ message: "not find recipient" });
    }
    res.status(200).json(recipient);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the recipient" });
  }
};

const CreateRecipient = async (req, res, next) => {
  const {
    name,
    age,
    address,
    familyMembers,
    partnerName,
    partnerAge,
    kidName,
    kidAge,
    identity,
  } = req.body;
  try {
    const recipient = await Recipient.create({
      name,
      age,
      address,
      familyMembers,
      partnerName,
      partnerAge,
      kidName,
      kidAge,
      identity,
    });

    if (recipient) {
      res.status(201).json({
        _id: recipient._id,
        name: recipient.name,
        age: recipient.age,
        address: recipient.address,
        familyMembers: recipient.familyMembers,
        partnerName: recipient.partnerName,
        partnerAge: recipient.partnerAge,
        kidName: recipient.kidName,
        kidAge: recipient.kidAge,
        identity: recipient.identity,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Failing to create the recipient" });
  }
};
module.exports = {
  getAllRecipient,
  CreateRecipient,
};
