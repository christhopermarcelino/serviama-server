const express = require("express");
const router = express.Router();

const {
  getGallonOrders,
  getGallonOrderById,
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
} = require("../controller/GallonController");

router.route("/").get(getGallonOrders).post(createGallonOrder);

router
  .route("/:id")
  .get(getGallonOrderById)
  .put(updateGallonOrderById)
  .delete(deleteGallonOrderById);

module.exports = router;
