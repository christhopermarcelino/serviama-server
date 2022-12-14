const PacketQuery = require("../repository/PacketRepository");

const APIErrorResponse = require("../helper/APIErrorResponse");

function Packet({ title, description, status, sender }) {
  this.title = title;
  this.description = description;
  this.status = status;
  this.sender = sender;
}

Packet.prototype.createPacket = async function () {
  return await PacketQuery.createPacket({
    title: this.title,
    description: this.description,
    status: this.status,
    sender: this.sender,
  });
};

const getAllPackets = async () => {
  return await PacketQuery.getAllPackets();
};

const getPacketById = async (id) => {
  return await PacketQuery.getPacketById(id);
};

const getPacketsByUserId = async (userId) => {
  return await PacketQuery.getPacketsByUserId(userId);
};

const updatePacketById = async (data) => {
  const Packet = await getPacketById(data.id);

  if (!Packet) {
    throw new APIErrorResponse(404, "Packet does not exist");
  }

  const dataUpdate = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === "id") continue;
    value && (dataUpdate[key] = value);
  }

  return await PacketQuery.updatePacketById({
    id: data.id,
    data: dataUpdate,
  });
};

const deletePacketById = async (id) => {
  const Packet = await getPacketById(data.id);

  if (!Packet) {
    throw new APIErrorResponse(404, "Packet does not exist");
  }

  return await PacketQuery.deletePacketById(id);
};

module.exports = {
  Packet,
  getAllPackets,
  getPacketById,
  getPacketsByUserId,
  updatePacketById,
  deletePacketById,
};
