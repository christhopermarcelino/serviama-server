const GallonUseCase = require("../usecase/GallonUseCase");

const getAllGallons = async () => {
  return await GallonUseCase.getAllGallons();
};

const getGallonById = async (id) => {
  return await GallonUseCase.getGallonById(id);
};

const createGallon = async ({ brand, stock }) => {
  return GallonUseCase.createGallon({ brand, stock });
};

const updateGallonById = async ({ id, brand, stock }) => {
  return GallonUseCase.updateGallonById({ id, brand, stock });
};

const deleteGallonById = async (id) => {
  return await GallonUseCase.deleteGallonById(id);
};

module.exports = {
  getAllGallons,
  getGallonById,
  createGallon,
  updateGallonById,
  deleteGallonById,
};
