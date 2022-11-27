const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const APIErrorResponse = require("../helper/APIErrorResponse");

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

const createUser = async ({ nrp, name, phone_number, email, password }) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        nrp,
        name,
        phone_number,
        email,
        password,
      },
    });

    return newUser;
  } catch (err) {
    throw new APIErrorResponse(500, "Error occured. Please try again.");
  }
};

module.exports = { getAllUsers, getUserById, createUser };
