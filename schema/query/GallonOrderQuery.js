const { GraphQLList, GraphQLID } = require("graphql");

const { GallonOrderType } = require("../typedef/GallonOrderType");
const GallonOrderController = require("../../controller/GallonOrderController");

const gallonOrders = {
  name: "gallonOrders",
  type: new GraphQLList(GallonOrderType),
  resolve: (parent, args) => {
    return GallonOrderController.getAllGallonOrders();
  },
};

const gallonOrderById = {
  name: "gallonOrderById",
  type: GallonOrderType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (parent, args) => {
    return GallonOrderController.getGallonOrderById(args.id);
  },
};

module.exports = {
  gallonOrders,
  gallonOrderById,
};
