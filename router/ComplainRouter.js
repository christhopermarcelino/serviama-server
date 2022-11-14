const express = require("express");
const router = express.Router();

const {
  getComplains,
  getComplainById,
  createComplain,
  updateComplainById,
  deleteComplainById,
} = require("../controller/ComplainController");

router.route("/").get(getComplains).post(createComplain);

router
  .route("/:id")
  .get(getComplainById)
  .put(updateComplainById)
  .delete(deleteComplainById);

module.exports = router;
