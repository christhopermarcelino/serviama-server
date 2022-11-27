const { GraphQLList, GraphQLInt, GraphQLID } = require("graphql");

const GallonType = require("../typedef/GallonType");

const GallonController = require("../../controller/GallonController");

const gallons = {
  type: new GraphQLList(GallonType),
  resolve: (_, args) => {
    return GallonController.getGallons();
  },
};

const gallon = {
  type: GallonType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_, args) => {
    return GallonController.getGallonById(args.id);
  },
};

module.exports = { gallons, gallon };
