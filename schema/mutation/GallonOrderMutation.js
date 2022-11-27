const { GraphQLNonNull, GraphQLInt, GraphQLID } = require("graphql");

const {
  GallonOrderType,
  GallonOrderStatusEnum,
} = require("../typedef/GallonOrderType");
const GallonOrderController = require("../../controller/GallonOrderController");

const createGallonOrder = {
  name: "createGallonOrder",
  type: GallonOrderType,
  args: {
    gallonId: { type: new GraphQLNonNull(GraphQLID) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args) => {
    const { userId, gallonId } = args;

    return GallonOrderController.createGallonOrder({ userId, gallonId });
  },
};

const updateGallonOrderById = {
  name: "updateGallonOrderById",
  type: GallonOrderType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    gallonId: { type: GraphQLID },
    userId: { type: GraphQLID },
    status: { type: GallonOrderStatusEnum },
  },
  resolve: (_, args) => {
    const { id, userId, gallonId, status } = args;

    return GallonOrderController.updateGallonOrderById({
      id,
      userId,
      gallonId,
      status,
    });
  },
};

const deleteGallonOrderById = {
  name: "deleteGallonOrderById",
  type: GallonOrderType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args) => {
    return GallonOrderController.deleteGallonOrderById(args.id);
  },
};

module.exports = {
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
};
