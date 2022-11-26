const { GraphQLNonNull, GraphQLInt } = require("graphql");
const { GallonOrderStatusEnum } = require("../typedef/GallonOrderType");
const UserType = require("../typedef/UserType");

const createGallonOrder = {
  name: "createGallonOrder",
  type: UserType,
  args: {
    gallonId: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

const updateGallonOrderById = {
  name: "updateGallonOrderById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    gallonId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    status: { type: GallonOrderStatusEnum },
  },
  resolve: (parent, args) => {},
};

const deleteGallonOrderById = {
  name: "deleteGallonOrderById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = {
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
};
