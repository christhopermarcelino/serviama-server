const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    nrp: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone_number: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = UserType;
