const express = require("express");

const galleryController = require("../controllers/gallery.controller");

const router = express.Router();

router.get("/", galleryController.galleryController);

router.get("/newpost", galleryController.newPostController);

router.post("/newpost", galleryController.pulishPostController);

router.get("/viewpost/:id", galleryController.viewPostController);

router.post("/viewPost", galleryController.deletePostController);

module.exports = router;