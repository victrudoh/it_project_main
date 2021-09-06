
const express = require("express");
const studentsController = require("../controllers/students.controller")

const router = express.Router();

router.get("/", studentsController.studentsListController);
  
router.get("/create", studentsController.createStudentController);

router.get("/edit/:id", studentsController.editStudentController);

router.post("/edit", studentsController.updateStudentController);

router.get("/delete/:id", studentsController.delete_viewStudentController);

router.post("/delete", studentsController.deleteStudentController);

router.get("/view/:id", studentsController.viewStudentController);

  
module.exports = router;