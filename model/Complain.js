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
    id: { type: GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLNonNull(ComplainStatusEnum) },
    userId: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.export = ComplainType;
