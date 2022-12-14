const PacketModel = require("../model/PacketModel");

const { PACKET_STATUS_ENUM } = require("../schema/typedef/PacketType");

const getAllPackets = async () => {
  return await PacketModel.getAllPackets();
};

const getPacketById = async (id) => {
  return await PacketModel.getPacketById(id);
};

const getPacketsByUserId = async (userId) => {
  return await PacketModel.getPacketsByUserId(userId);
};

const createPacket = async ({ title, description, userId }) => {
  const Packet = new PacketModel.Packet({
    title,
    description,
    userId,
    status: PACKET_STATUS_ENUM.ARRIVED,
  });

  const createdPacket = await Packet.createPacket();

  return createdPacket;
};

const updatePacketById = async ({ id, title, description, status }) => {
  return await PacketModel.updatePacketById({
    id,
    title,
    description,
    status,
  });
};

const deletePacketById = async (id) => {
  return await PacketModel.deletePacketById(id);
};

module.exports = {
  getAllPackets,
  getPacketById,
  getPacketsByUserId,
  createPacket,
  updatePacketById,
  deletePacketById,
};
