const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const APIErrorResponse = require("../helper/APIErrorResponse");

const getAllPackets = async () => {
  try {
    const packets = await prisma.packet.findMany();

    return packets;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getPacketById = async (id) => {
  try {
    const packet = await prisma.packet.findUnique({
      where: { id },
    });

    return packet;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getPacketsByUserId = async (userId) => {
  try {
    const packets = await prisma.packet.findMany({
      where: { userId },
    });

    return packets;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const createPacket = async ({ description, sender, status, userId }) => {
  try {
    const newPacket = await prisma.packet.create({
      data: {
        description,
        sender,
        status,
        userId,
      },
    });

    return newPacket;
  } catch (err) {
    console.log(err);
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const updatePacketById = async ({ id, data }) => {
  try {
    const updatedPacket = await prisma.packet.update({
      where: {
        id,
      },
      data,
    });

    return updatedPacket;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const deletePacketById = async (id) => {
  try {
    const deletedPacket = await prisma.packet.delete({
      where: {
        id,
      },
    });

    return deletedPacket;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

module.exports = {
  getAllPackets,
  getPacketById,
  getPacketsByUserId,
  createPacket,
  updatePacketById,
  deletePacketById,
};
