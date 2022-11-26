const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const { ComplainStatusEnum } = require("../../model/ComplainType");
const UserType = require("../../model/UserType");

const createComplain = {
  name: "createComplain",
  type: UserType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

const updateComplainById = {
  name: "updateComplainById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: ComplainStatusEnum },
  },
  resolve: (parent, args) => {},
};

const deleteComplainById = {
  name: "deleteComplainById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = { createComplain, updateComplainById, deleteComplainById };
