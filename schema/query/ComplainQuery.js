const { GraphQLList, GraphQLInt } = require("graphql");

const { ComplainType } = require("../typedef/ComplainType");

const complains = {
  type: new GraphQLList(ComplainType),
  resolve: (parent, args) => {},
};

const complainById = {
  type: ComplainType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const complainsByUserId = {
  type: new GraphQLList(ComplainType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = {
  complains,
  complainById,
  complainsByUserId,
};
