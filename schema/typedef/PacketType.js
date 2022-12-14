const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const PACKET_STATUS_ENUM = {
  ARRIVED: 0,
  TAKEN: 1,
};

const PacketStatusEnum = new GraphQLEnumType({
  name: "PacketStatusEnum",
  values: {
    ARRIVED: { value: 0 },
    TAKEN: { value: 1 },
  },
});

const PacketType = new GraphQLObjectType({
  name: "PacketType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    status: { type: new GraphQLNonNull(PacketStatusEnum) },
    sender: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  }),
});

module.exports = { PacketType, PacketStatusEnum, PACKET_STATUS_ENUM };
