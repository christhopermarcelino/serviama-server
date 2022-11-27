const ComplainQuery = require("../repository/ComplainRepository");

const APIErrorResponse = require("../helper/APIErrorResponse");

function Complain({ title, description, status, userId }) {
  this.title = title;
  this.description = description;
  this.status = status;
  this.userId = userId;
}

Complain.prototype.createComplain = async function () {
  return await ComplainQuery.createComplain({
    title: this.title,
    description: this.description,
    status: this.status,
    userId: this.userId,
  });
};

const getAllComplains = async () => {
  return await ComplainQuery.getAllComplains();
};

const getComplainById = async (id) => {
  return await ComplainQuery.getComplainById(id);
};

const updateComplainById = async (data) => {
  const complain = await getComplainById(data.id);

  if (!complain) {
    throw new APIErrorResponse(404, "Complain does not exist");
  }

  const dataUpdate = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === "id") continue;
    value && (dataUpdate[key] = value);
  }

  return await ComplainQuery.updateComplainById({
    id: data.id,
    data: dataUpdate,
  });
};

const deleteComplainById = async (id) => {
  const complain = await getComplainById(data.id);

  if (!complain) {
    throw new APIErrorResponse(404, "Complain does not exist");
  }

  return await ComplainQuery.deleteComplainById(id);
};

module.exports = {
  Complain,
  getAllComplains,
  getComplainById,
  updateComplainById,
  deleteComplainById,
};
