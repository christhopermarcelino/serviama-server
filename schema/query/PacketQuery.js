const { GraphQLList, GraphQLInt } = require("graphql");

const { PacketType } = require("../../model/PacketType");

const getPackets = {
  type: new GraphQLList(PacketType),
  resolve: (parent, args) => {},
};

const getPacketById = {
  type: PacketType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

const getPacketsByUserId = {
  type: new GraphQLList(PacketType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {},
};

module.exports = { getPackets, getPacketById, getPacketsByUserId };
