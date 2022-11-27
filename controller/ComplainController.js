const ComplainUseCase = require("../usecase/ComplainUseCase");

const getAllComplains = async () => {
  return await ComplainUseCase.getAllComplains();
};

const getComplainById = async (id) => {
  return await ComplainUseCase.getComplainById(id);
};

const createComplain = async ({ title, description, userId }) => {
  return await ComplainUseCase.createComplain({
    title,
    description,
    userId,
  });
};

const updateComplainById = async ({ id, title, description, status }) => {
  return await ComplainUseCase.updateComplain({
    id,
    title,
    description,
    status,
  });
};

const deleteComplainById = async (id) => {
  return await ComplainUseCase.deleteComplainById(id);
};

module.exports = {
  getAllComplains,
  getComplainById,
  createComplain,
  updateComplainById,
  deleteComplainById,
};
