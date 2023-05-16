const express = require("express");
const itemController = require("../controllers/item");

const router = express.Router();

// Get all donors
router.get("/", itemController.getAllItem);

// Create an donor
router.post("/", itemController.CreateItem);

// Update an donor
//router.put("/:donorId", donorController.updateOrder);

module.exports = router;
