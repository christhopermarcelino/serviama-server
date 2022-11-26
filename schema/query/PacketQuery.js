const { GraphQLList, GraphQLInt } = require("graphql");

const { PacketType } = require("../../model/PacketType");

const packets = {
  type: new GraphQLList(PacketType),
  resolve: (parent, args) => {},
};

const packetById = {
  type: PacketType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const packetsByUserId = {
  type: new GraphQLList(PacketType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { packets, packetById, packetsByUserId };
