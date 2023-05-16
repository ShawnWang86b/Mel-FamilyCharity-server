const express = require("express");
const requisitionController = require("../controllers/requisition");

const router = express.Router();

// Get all Requisition
router.get("/", requisitionController.getAllRequisition);

// Create an Requisition
router.post("/", requisitionController.CreateRequisition);

module.exports = router;
