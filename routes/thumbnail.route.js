/* external imports */
const express = require("express");
const multer = require("multer");

// internal import
const postAThumbnail = require("../controllers/thumbnail.controller");

// upload variable
const upload = multer({ dest: `${__dirname}/../public/thumbnails/` });

// router connection
const router = express.Router();

router.post("/", upload.single("thumbnail"), postAThumbnail);

module.exports = router;
