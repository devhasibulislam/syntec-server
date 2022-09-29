/* external import */
const express = require("express");

/* internal import */
const {
  postAServiceToController,
  displayAllServicesFromController,
  updateAServiceFromController,
} = require("../controllers/service.controller");

/* internal import */

/* router level connection */
const router = express.Router();

router
  .route("/")
  .get(displayAllServicesFromController)
  .post(postAServiceToController);

router.route("/:id").patch(updateAServiceFromController);

module.exports = router;
