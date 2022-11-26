const { GraphQLList, GraphQLInt } = require("graphql");

const { GallonOrderType } = require("../typedef/GallonOrderType");

const gallonOrders = {
  type: new GraphQLList(GallonOrderType),
  resolve: (parent, args) => {},
};

const gallonOrderById = {
  type: GallonOrderType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const gallonOrdersByUserId = {
  type: new GraphQLList(GallonOrderType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = {
  gallonOrders,
  gallonOrderById,
  gallonOrdersByUserId,
};
