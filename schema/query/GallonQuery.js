const { GraphQLList, GraphQLInt } = require("graphql");

const GallonType = require("../../model/GallonType");

const getGallons = {
  type: new GraphQLList(GallonType),
  resolve: (parent, args) => {},
};

const getGallonById = {
  type: GallonType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { getGallons, getGallonById };
