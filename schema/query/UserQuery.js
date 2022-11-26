const { GraphQLList, GraphQLInt, GraphQLString } = require("graphql");

const UserType = require("../../model/UserType");

const getUsers = {
  type: new GraphQLList(UserType),
  resolve: (parent, _) => {},
};

const getUserById = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { getUsers, getUserById };
