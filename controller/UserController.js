const UserUseCase = require("../usecase/UserUseCase");

const getAllUsers = async () => {
  return await UserUseCase.getAllUsers();
};

const getUserById = async (id) => {
  return await UserUseCase.getUserById(id);
};

const createUser = async ({ nrp, name, email, phone_number, password }) => {
  const newUser = await UserUseCase.createUser({
    nrp,
    name,
    email,
    phone_number,
    password,
  });

  return newUser;
};

const updateUserById = ({ id, nrp, name, email, phone_number, password }) => {};

const deleteUserById = (id) => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
