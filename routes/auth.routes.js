const express = require("express");
const authController = require("../controllers/auth.controller");
const studentsController = require("../controllers/students.controller");

const router = express.Router();

router.get("/login", authController.loginController);

router.get("/register", authController.registerController);

router.post("/login", studentsController.verifyController);

router.post("/register", studentsController.publishStudentController);


module.exports = router;
