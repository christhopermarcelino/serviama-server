const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
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
    id: { type: GraphQLNonNull(GraphQLInt) },
    gallonId: { type: GraphQLNonNull(GraphQLInt) },
    userId: { type: GraphQLNonNull(GraphQLInt) },
    status: { type: GraphQLNonNull(GallonOrderStatusEnum) },
  }),
});

module.export = GallonOrderType;
