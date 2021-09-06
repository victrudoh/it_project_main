const express = require("express");

const FAQSController = require("../controllers/FAQS.controller");

const router = express.Router();

router.get("/", FAQSController.FAQSController);

module.exports = router;
