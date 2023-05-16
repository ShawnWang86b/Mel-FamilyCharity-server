const express = require("express");
const receivingItemsController = require("../controllers/receivingItem");

const router = express.Router();

// Get all Requisition
router.get("/", receivingItemsController.getAllReceivingItem);

// Create an Requisition
router.post("/", receivingItemsController.CreateReceivingItem);

module.exports = router;
