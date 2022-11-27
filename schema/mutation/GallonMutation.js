const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLID,
} = require("graphql");

const GallonType = require("../typedef/GallonType");

const GallonController = require("../../controller/GallonController");

const createGallon = {
  name: "createGallon",
  type: GallonType,
  args: {
    brand: { type: new GraphQLNonNull(GraphQLString) },
    stock: { type: GraphQLInt, defaultValue: 0 },
  },
  resolve: (_, args) => {
    const { brand, stock } = args;

    return GallonController.createGallon({ brand, stock });
  },
};

const updateGallonById = {
  name: "updateGallonById",
  type: GallonType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    brand: { type: GraphQLString },
    stock: { type: GraphQLInt },
  },
  resolve: (_, args) => {
    const { id, brand, stock } = args;

    return GallonController.updateGallonById({ id, brand, stock });
  },
};

const deleteGallonById = {
  name: "deleteGallonById",
  type: GallonType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args) => {
    return GallonController.deleteGallonById(args.id);
  },
};

module.exports = { createGallon, updateGallonById, deleteGallonById };
