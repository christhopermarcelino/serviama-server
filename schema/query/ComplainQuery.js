const { GraphQLList, GraphQLID, GraphQLNonNull } = require("graphql");

const { ComplainType } = require("../typedef/ComplainType");

const ComplainController = require("../../controller/ComplainController");

const complains = {
  type: new GraphQLList(ComplainType),
  resolve: (parent, args) => {
    return ComplainController.getAllComplains();
  },
};

const complainById = {
  type: ComplainType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    return ComplainController.getComplainById(args.id);
  },
};

module.exports = {
  complains,
  complainById,
};
