const { GraphQLList, GraphQLInt, GraphQLString } = require("graphql");

const UserType = require("../typedef/UserType");

const { getAllUsers, getUserById } = require("../../controller/UserController");

const users = {
  type: new GraphQLList(UserType),
  resolve: (parent, _) => getAllUsers(),
};

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => getUserById(args.id),
};

module.exports = { users, user };
