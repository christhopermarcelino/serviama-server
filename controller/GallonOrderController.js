const GallonOrderUseCase = require("../usecase/GallonOrderUseCase");

const getAllGallonOrders = async () => {
  return await GallonOrderUseCase.getAllGallonOrders();
};

const getGallonOrderById = async (id) => {
  return await GallonOrderUseCase.getGallonOrderById(id);
};

const createGallonOrder = async ({ userId, gallonId }) => {
  return GallonOrderUseCase.createGallonOrder({ userId, gallonId });
};

const updateGallonOrderById = async ({ id, userId, gallonId, status }) => {
  return GallonOrderUseCase.updateGallonOrderById({
    id,
    userId,
    gallonId,
    status,
  });
};

const deleteGallonOrderById = async (id) => {
  return await GallonOrderUseCase.deleteGallonOrderById(id);
};

module.exports = {
  getAllGallonOrders,
  getGallonOrderById,
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
};
