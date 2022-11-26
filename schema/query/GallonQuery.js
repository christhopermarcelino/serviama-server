const { GraphQLList, GraphQLInt } = require("graphql");

const GallonType = require("../../model/GallonType");

const gallons = {
  type: new GraphQLList(GallonType),
  resolve: (parent, args) => {},
};

const gallon = {
  type: GallonType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { gallons, gallon };
