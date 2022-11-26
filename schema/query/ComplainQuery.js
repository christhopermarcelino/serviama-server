const { GraphQLList, GraphQLInt } = require("graphql");

const { ComplainType } = require("../../model/ComplainType");

const getComplains = {
  type: new GraphQLList(ComplainType),
  resolve: (parent, args) => {},
};

const getComplainById = {
  type: ComplainType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const getComplainsByUserId = {
  type: new GraphQLList(ComplainType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = {
  getComplains,
  getComplainById,
  getComplainsByUserId,
};
