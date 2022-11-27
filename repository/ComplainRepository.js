const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const APIErrorResponse = require("../helper/APIErrorResponse");

const getAllComplains = async () => {
  try {
    const users = await prisma.complain.findMany();

    return users;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getComplainById = async (id) => {
  try {
    const complain = await prisma.complain.findUnique({
      where: { id },
    });

    return complain;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const createComplain = async ({ title, description, status, userId }) => {
  try {
    const newComplain = await prisma.complain.create({
      data: {
        title,
        description,
        status,
        userId,
      },
    });

    return newComplain;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const updateComplainById = async ({ id, data }) => {
  try {
    const updatedComplain = await prisma.complain.update({
      where: {
        id,
      },
      data,
    });

    return updatedComplain;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const deleteComplainById = async (id) => {
  try {
    const deletedComplain = await prisma.complain.delete({
      where: {
        id,
      },
    });

    return deletedComplain;
  } catch (err) {
    throw new APIErrorResponse(500, err.message);
  }
};

module.exports = {
  getAllComplains,
  getComplainById,
  createComplain,
  updateComplainById,
  deleteComplainById,
};
