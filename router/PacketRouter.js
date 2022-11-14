const express = require("express");
const router = express.Router();

const {
  getPackets,
  getPacketById,
  createPacket,
  updatePacketById,
  deletePacketById,
} = require("../controller/PacketController");

router.route("/").get(getPackets).post(createPacket);

router
  .route("/:id")
  .get(getPacketById)
  .put(updatePacketById)
  .delete(deletePacketById);

module.exports = router;
