const express = require("express");
const kitController = require("../controllers/kit");

const router = express.Router();

// Get all kits
router.get("/", kitController.getAllKit);

// Create an kit
router.post("/", kitController.CreateKit);

module.exports = router;
