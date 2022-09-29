/* external import */
const express = require("express");

/* internal import */
const {
  postAnUserToControllerForRegister,
  postAnUserToControllerForLogin,
} = require("../controllers/user.controller");

/* router level connection */
const router = express.Router();

router.post("/signup", postAnUserToControllerForRegister);
router.post("/signin", postAnUserToControllerForLogin);

module.exports = router;
