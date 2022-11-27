const GallonUseCase = require("../usecase/GallonUseCase");

const getGallons = async () => {
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
  getGallons,
  getGallonById,
  createGallon,
  updateGallonById,
  deleteGallonById,
};
