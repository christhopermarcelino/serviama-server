const ComplainModel = require("../model/ComplainModel");

const { COMPLAIN_STATUS_ENUM } = require("../schema/typedef/ComplainType");

const getAllComplains = async () => {
  return await ComplainModel.getAllComplains();
};

const getComplainById = async (id) => {
  return await ComplainModel.getComplainById(id);
};

const createComplain = async ({ title, description, userId }) => {
  const complain = new ComplainModel.Complain({
    title,
    description,
    userId,
    status: COMPLAIN_STATUS_ENUM.WAITING,
  });

  const createdComplain = await complain.createComplain();

  return createdComplain;
};

const updateComplainById = async ({ id, title, description, status }) => {
  return await ComplainModel.updateComplainById({
    id,
    title,
    description,
    status,
  });
};

const deleteComplainById = async (id) => {
  return await ComplainModel.deleteComplainById(id);
};

module.exports = {
  getAllComplains,
  getComplainById,
  createComplain,
  updateComplainById,
  deleteComplainById,
};
