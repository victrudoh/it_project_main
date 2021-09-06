const express = require("express");

const coursesController = require("../controllers/courses.controller");

const router = express.Router();

router.get("/", coursesController.coursesController);

module.exports = router;