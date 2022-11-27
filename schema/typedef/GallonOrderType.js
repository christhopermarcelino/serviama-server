const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
} = require("graphql");

const GALLONORDER_STATUS_ENUM = {
  WAITING: 0,
  IN_PROGRESS: 1,
  DONE: 2,
};

const GallonOrderStatusEnum = new GraphQLEnumType({
  name: "GallonOrderStatusEnum",
  values: {
    WAITING: { value: 0 },
    IN_PROGRESS: { value: 1 },
    DONE: { value: 2 },
  },
});

const GallonOrderType = new GraphQLObjectType({
  name: "GallonOrderType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    gallonId: { type: new GraphQLNonNull(GraphQLID) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
    status: { type: new GraphQLNonNull(GallonOrderStatusEnum) },
  }),
});

module.exports = {
  GallonOrderType,
  GallonOrderStatusEnum,
  GALLONORDER_STATUS_ENUM,
};
