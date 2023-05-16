const express = require("express");
const donorController = require("../controllers/donor");

const router = express.Router();

// Get all donors
router.get("/", donorController.getAllDonor);

// Create an donor
router.post("/", donorController.CreateDonor);

// Update an donor
//router.put("/:donorId", donorController.updateOrder);

module.exports = router;
