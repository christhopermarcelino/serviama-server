const UserModel = require("../model/UserModel");

const getAllUsers = async () => {
  return await UserModel.getAllUsers();
};

const getUserById = async (id) => {
  return UserModel.getUserById(id);
};

const createUser = async ({ nrp, name, email, phone_number, password }) => {
  const user = new UserModel.User({ nrp, name, email, phone_number, password });

  const savedUser = user.createUser();

  return savedUser;
};

module.exports = { getAllUsers, getUserById, createUser };
