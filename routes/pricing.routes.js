const express = require("express");

const pricingController = require("../controllers/pricing.controller");

const router = express.Router();

router.get("/", pricingController.pricingController);

module.exports = router;
