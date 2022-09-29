/* external import */
const express = require("express");

/* internal import */
const {
  postAServiceToController,
} = require("../controllers/service.controller");

/* internal import */

/* router level connection */
const router = express.Router();

router.route("/").get(postAServiceToController).post();

module.exports = router;
