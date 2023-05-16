const Donor = require("../models/Donors");
const mongoose = require("mongoose");

const getAllDonor = async (req, res, next) => {
  try {
    const donor = await Donor.find();

    if (!donor) {
      res.status(404).json({ message: "not find donor" });
    }
    res.status(200).json(donor);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the donor" });
  }
};

const CreateDonor = async (req, res, next) => {
  const {
    name,
    age,
    mailingAddress,
    phone,
    mobile,
    email,
    organizationName,
    headquarter,
    contactPerson,
    identity,
  } = req.body;
  try {
    const donor = await Donor.create({
      name,
      age,
      mailingAddress,
      phone,
      mobile,
      email,
      organizationName,
      headquarter,
      contactPerson,
      identity,
    });

    if (donor) {
      res.status(201).json({
        _id: donor._id,
        name: donor.name,
        age: donor.age,
        mailingAddress: donor.mailingAddress,
        phone: donor.phone,
        mobile: donor.mobile,
        email: donor.email,
        organizationName: donor.organizationName,
        headquarter: donor.headquarter,
        contactPerson: donor.contactPerson,
        identity: donor.identity,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Failing to create the donor" });
  }
};

module.exports = {
  getAllDonor,
  CreateDonor,
};
