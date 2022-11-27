const GallonModel = require("../model/GallonModel");

const getAllGallons = async () => {
  return await GallonModel.getAllGallons();
};

const getGallonById = async (id) => {
  return await GallonModel.getGallonById(id);
};

const createGallon = async ({ brand, stock }) => {
  const Gallon = new GallonModel.Gallon({
    brand,
    stock,
  });

  const createdGallon = await Gallon.createGallon();

  return createdGallon;
};

const updateGallonById = async ({ id, brand, stock }) => {
  return await GallonModel.updateGallonById({
    id,
    brand,
    stock,
  });
};

const deleteGallonById = async (id) => {
  return await GallonModel.deleteGallonById(id);
};

module.exports = {
  getAllGallons,
  getGallonById,
  createGallon,
  updateGallonById,
  deleteGallonById,
};
