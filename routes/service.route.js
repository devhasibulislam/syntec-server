/* external import */
const express = require("express");

/* internal import */
const {
  postAServiceToController,
  displayAllServicesFromController,
} = require("../controllers/service.controller");

/* internal import */

/* router level connection */
const router = express.Router();

router
  .route("/")
  .get(displayAllServicesFromController)
  .post(postAServiceToController);

module.exports = router;
