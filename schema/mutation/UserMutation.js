const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const UserType = require("../typedef/UserType");

const createUser = {
  name: "createUser",
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {},
};

const updateUserById = {
  name: "updateUserById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (parent, args) => {},
};

const deleteUserById = {
  name: "deleteUserById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = { createUser, updateUserById, deleteUserById };
