const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const UserType = require("../typedef/UserType");

const createGallon = {
  name: "createGallon",
  type: UserType,
  args: {
    brand: { type: new GraphQLNonNull(GraphQLString) },
    stock: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

const updateGallonById = {
  name: "updateGallonById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    brand: { type: GraphQLString },
    stock: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const deleteGallonById = {
  name: "deleteGallonById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = { createGallon, updateGallonById, deleteGallonById };
