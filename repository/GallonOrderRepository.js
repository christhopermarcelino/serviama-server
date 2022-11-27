const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const APIErrorResponse = require("../helper/APIErrorResponse");

const getAllGallonOrders = async () => {
  try {
    const gallonOrders = await prisma.gallonOrder.findMany();

    return gallonOrders;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getGallonOrderById = async (id) => {
  try {
    const gallonOrder = await prisma.gallonOrder.findUnique({
      where: { id },
    });

    return gallonOrder;
  } catch (err) {
    throw new APIErrorResponse(500, err.message);
  }
};

const createGallonOrder = async ({ userId, gallonId, status }) => {
  try {
    const newGallonOrder = await prisma.gallonOrder.create({
      data: {
        userId,
        gallonId,
        status,
      },
    });

    return newGallonOrder;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const updateGallonOrderById = async ({ id, data }) => {
  try {
    const updatedGallonOrder = await prisma.gallonOrder.update({
      where: {
        id,
      },
      data,
    });

    return updatedGallonOrder;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const deleteGallonOrderById = async (id) => {
  try {
    const deletedGallonOrder = await prisma.gallonOrder.delete({
      where: {
        id,
      },
    });

    return deletedGallonOrder;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

module.exports = {
  getAllGallonOrders,
  getGallonOrderById,
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
};
