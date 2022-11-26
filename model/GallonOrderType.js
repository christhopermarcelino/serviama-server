const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

const GallonOrderStatusEnum = new GraphQLEnumType({
  name: "GallonOrderStatusEnum",
  values: {
    WAITING: { value: 0 },
    IN_PROGRESS: { value: 1 },
    DONE: { value: 2 },
  },
});

const GallonOrderType = new GraphQLObjectType({
  name: "gallon_order",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    gallonId: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    status: { type: new GraphQLNonNull(GallonOrderStatusEnum) },
  }),
});

module.exports = { GallonOrderType, GallonOrderStatusEnum };
