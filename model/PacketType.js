const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
} = require("graphql");

const PacketStatusEnum = new GraphQLEnumType({
  name: "PacketStatusEnum",
  values: {
    ARRIVED: { value: 0 },
    TAKEN: { value: 1 },
  },
});

const PacketType = new GraphQLObjectType({
  name: "packet",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    arrived_time: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    status: { type: new GraphQLNonNull(PacketStatusEnum) },
    sender: { type: new GraphQLNonNull(GraphQLString) },
    receiver: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = { PacketType, PacketStatusEnum };
