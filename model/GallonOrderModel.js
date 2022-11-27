const GallonOrderQuery = require("../repository/GallonOrderRepository");

const APIErrorResponse = require("../helper/APIErrorResponse");

function GallonOrder({ userId, gallonId, status }) {
  this.userId = userId;
  this.gallonId = gallonId;
  this.status = status;
}

GallonOrder.prototype.createGallonOrder = async function () {
  return await GallonOrderQuery.createGallonOrder({
    userId: this.userId,
    gallonId: this.gallonId,
    status: this.status,
  });
};

const getAllGallonOrders = async () => {
  return await GallonOrderQuery.getAllGallonOrders();
};

const getGallonOrderById = async (id) => {
  return await GallonOrderQuery.getGallonOrderById(id);
};

const updateGallonOrderById = async (data) => {
  const gallonOrder = await getGallonOrderById(data.id);

  if (!gallonOrder) {
    throw new APIErrorResponse(404, "GallonOrder does not exist");
  }

  const dataUpdate = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === "id") continue;
    value && (dataUpdate[key] = value);
  }

  return await GallonOrderQuery.updateGallonOrderById({
    id: data.id,
    data: dataUpdate,
  });
};

const deleteGallonOrderById = async (id) => {
  const GallonOrder = await getGallonOrderById(id);

  if (!GallonOrder) {
    throw new APIErrorResponse(404, "Gallon Order does not exist");
  }

  return await GallonOrderQuery.deleteGallonOrderById(id);
};

module.exports = {
  GallonOrder,
  getAllGallonOrders,
  getGallonOrderById,
  updateGallonOrderById,
  deleteGallonOrderById,
};
