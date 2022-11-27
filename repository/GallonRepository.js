const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const APIErrorResponse = require("../helper/APIErrorResponse");

const getAllGallons = async () => {
  try {
    const gallons = await prisma.gallon.findMany();

    return gallons;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getGallonById = async (id) => {
  try {
    const gallon = await prisma.gallon.findUnique({
      where: { id },
    });

    return gallon;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const createGallon = async ({ brand, stock }) => {
  try {
    const newGallon = await prisma.gallon.create({
      data: {
        brand,
        stock,
      },
    });

    return newGallon;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const updateGallonById = async ({ id, data }) => {
  try {
    const updatedGallon = await prisma.gallon.update({
      where: {
        id,
      },
      data,
    });

    return updatedGallon;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const deleteGallonById = async (id) => {
  try {
    const deletedGallon = await prisma.gallon.delete({
      where: {
        id,
      },
    });

    return deletedGallon;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

module.exports = {
  getAllGallons,
  getGallonById,
  createGallon,
  updateGallonById,
  deleteGallonById,
};
