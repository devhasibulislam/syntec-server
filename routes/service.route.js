/* external import */
const express = require("express");

/* internal import */
const {
  postAServiceToController,
  displayAllServicesFromController,
  updateAServiceFromController,
  deleteAServiceFromController,
} = require("../controllers/service.controller");

/* internal import */

/* router level connection */
const router = express.Router();

/* routing without id */
router
  .route("/")
  .get(displayAllServicesFromController)
  .post(postAServiceToController);

/* routing with id */
router
  .route("/:id")
  .patch(updateAServiceFromController)
  .delete(deleteAServiceFromController);

module.exports = router;
