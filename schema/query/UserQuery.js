const {
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const UserType = require("../typedef/UserType");

const { getAllUsers, getUserById } = require("../../controller/UserController");

const users = {
  type: new GraphQLList(UserType),
  resolve: (parent, _) => getAllUsers(),
};

const user = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args) => getUserById(args.id),
};

module.exports = { users, user };
