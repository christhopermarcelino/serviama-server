const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const COMPLAIN_STATUS_ENUM = {
  WAITING: 0,
  IN_PROGRESS: 1,
  DONE: 2,
};

const ComplainStatusEnum = new GraphQLEnumType({
  name: "ComplainStatusEnum",
  values: {
    WAITING: { value: 0 },
    IN_PROGRESS: { value: 1 },
    DONE: { value: 2 },
  },
});

const ComplainType = new GraphQLObjectType({
  name: "ComplainType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(ComplainStatusEnum) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  }),
});

module.exports = {
  ComplainType,
  ComplainStatusEnum,
  COMPLAIN_STATUS_ENUM,
};
