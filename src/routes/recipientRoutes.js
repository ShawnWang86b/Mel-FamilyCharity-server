const express = require("express");
const recipientController = require("../controllers/recipient");

const router = express.Router();

// Get all recipient
router.get("/", recipientController.getAllRecipient);

// Create an recipient
router.post("/", recipientController.CreateRecipient);

// Update an recipient
//router.put("/:donorId", donorController.updateOrder);

module.exports = router;
