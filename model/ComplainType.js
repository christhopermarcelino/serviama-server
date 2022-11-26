const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
} = require("graphql");

const ComplainStatusEnum = new GraphQLEnumType({
  name: "ComplainStatusEnum",
  values: {
    WAITING: { value: 0 },
    IN_PROGRESS: { value: 1 },
    DONE: { value: 2 },
  },
});

const ComplainType = new GraphQLObjectType({
  name: "complain",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(ComplainStatusEnum) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = { ComplainType, ComplainStatusEnum };
