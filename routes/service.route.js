/* external import */
const express = require("express");

/* internal import */

/* router level connection */
const router = express.Router();

router.route("/").get().post();

module.exports = router;
