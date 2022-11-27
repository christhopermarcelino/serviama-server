const GallonQuery = require("../repository/GallonRepository");

const APIErrorResponse = require("../helper/APIErrorResponse");

function Gallon({ brand, stock }) {
  this.brand = brand;
  this.stock = stock;
}

Gallon.prototype.createGallon = async function () {
  return await GallonQuery.createGallon({
    brand: this.brand,
    stock: this.stock,
  });
};

const getAllGallons = async () => {
  return await GallonQuery.getAllGallons();
};

const getGallonById = async (id) => {
  return await GallonQuery.getGallonById(id);
};

const updateGallonById = async (data) => {
  const gallon = await getGallonById(data.id);

  if (!gallon) {
    throw new APIErrorResponse(404, "Gallon does not exist");
  }

  const dataUpdate = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === "id") continue;
    value && (dataUpdate[key] = value);
  }

  return await GallonQuery.updateGallonById({
    id: data.id,
    data: dataUpdate,
  });
};

const deleteGallonById = async (id) => {
  const gallon = await getGallonById(id);

  if (!gallon) {
    throw new APIErrorResponse(404, "Gallon does not exist");
  }

  return await GallonQuery.deleteGallonById(id);
};

module.exports = {
  Gallon,
  getAllGallons,
  getGallonById,
  updateGallonById,
  deleteGallonById,
};
