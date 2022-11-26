const { GraphQLList, GraphQLInt, GraphQLString } = require("graphql");

const UserType = require("../../model/UserType");

const users = {
  type: new GraphQLList(UserType),
  resolve: (parent, _) => [],
};

const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { users, user };
