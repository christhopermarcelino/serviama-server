const { GraphQLList, GraphQLInt } = require("graphql");

const { GallonOrderType } = require("../../model/GallonOrderType");

const getGallonOrders = {
  type: new GraphQLList(GallonOrderType),
  resolve: (parent, args) => {},
};

const getGallonOrderById = {
  type: GallonOrderType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const getGallonOrdersByUserId = {
  type: new GraphQLList(GallonOrderType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = {
  getGallonOrders,
  getGallonOrderById,
  getGallonOrdersByUserId,
};
