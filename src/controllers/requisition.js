const Requisition = require("../models/Requisitions");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

const getAllRequisition = async (req, res, next) => {
  try {
    const requisition = await Requisition.find();

    if (!requisition) {
      res.status(404).json({ message: "not find requisition" });
    }
    res.status(200).json(requisition);
  } catch (error) {
    res.status(400).json({ message: "Failing to find the requisition" });
  }
};

const CreateRequisition = async (req, res, next) => {
  const { recipientName, item, quantity } = req.body;
  try {
    const requisition = await Requisition.create({
      recipientName,
      item,
      quantity,
    });

    if (requisition) {
      res.status(201).json({
        _id: requisition._id,
        recipientName: requisition.recipientName,
        item: requisition.item,
        quantity: requisition.quantity,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const text = `${requisition.recipientName} wants ${requisition.quantity} of ${requisition.item}`;
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Received a new requisition",
      text,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log("Email sent:" + info.response);
        res.send("successful send");
      }
    });
  } catch (error) {
    res.status(400).json({ message: "Failing to create the requisition" });
  }
};

module.exports = {
  getAllRequisition,
  CreateRequisition,
};
