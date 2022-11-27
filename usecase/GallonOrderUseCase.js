const GallonOrderModel = require("../model/GallonOrderModel");
const {
  GALLONORDER_STATUS_ENUM,
} = require("../schema/typedef/GallonOrderType");

const getAllGallonOrders = async () => {
  return await GallonOrderModel.getAllGallonOrders();
};

const getGallonOrderById = async (id) => {
  return await GallonOrderModel.getGallonOrderById(id);
};

const createGallonOrder = async ({ userId, gallonId }) => {
  const gallonOrder = new GallonOrderModel.GallonOrder({
    userId,
    gallonId,
    status: GALLONORDER_STATUS_ENUM.WAITING,
  });

  const createdGallonOrder = await gallonOrder.createGallonOrder();

  return createdGallonOrder;
};

const updateGallonOrderById = async ({ id, userId, gallonId, status }) => {
  return await GallonOrderModel.updateGallonOrderById({
    id,
    userId,
    gallonId,
    status,
  });
};

const deleteGallonOrderById = async (id) => {
  return await GallonOrderModel.deleteGallonOrderById(id);
};

module.exports = {
  getAllGallonOrders,
  getGallonOrderById,
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
};
