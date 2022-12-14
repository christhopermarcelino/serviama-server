const PacketUseCase = require("../usecase/PacketUseCase");

const getPackets = async () => {
  return await PacketUseCase.getAllPackets();
};

const getPacketById = async (id) => {
  return await PacketUseCase.getPacketById(id);
};

const getPacketsByUserId = async (userId) => {
  return await PacketUseCase.getPacketsByUserId(userId);
};

const createPacket = async ({ description, userId }) => {
  return await PacketUseCase.createPacket({ description, userId });
};

const updatePacketById = async ({
  id,
  description,
  status,
  sender,
  userId,
}) => {
  return await PacketUseCase.updatePacketById({
    id,
    description,
    status,
    sender,
    userId,
  });
};

const deletePacketById = async (id) => {
  return await PacketUseCase.deletePacketById(id);
};

module.exports = {
  getPackets,
  getPacketById,
  getPacketsByUserId,
  createPacket,
  updatePacketById,
  deletePacketById,
};
