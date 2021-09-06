const express = require("express");

const indexController = require("../controllers/index.controller")

const router = express.Router();

router.get("/",indexController.indexController);

router.get("/about", indexController.aboutController)

router.get("/home", indexController.homeController)

module.exports = router;