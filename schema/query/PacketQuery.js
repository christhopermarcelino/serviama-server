const { GraphQLList, GraphQLInt } = require("graphql");

const { PacketType } = require("../typedef/PacketType");

const PacketController = require("../../controller/PacketController");

const packets = {
  type: new GraphQLList(PacketType),
  resolve: (parent, args) => {
    return PacketController.getPackets();
  },
};

const packetById = {
  type: PacketType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (parent, args) => {
    return PacketController.getPacketById(args.id);
  },
};

const packetsByUserId = {
  type: new GraphQLList(PacketType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: (parent, args) => {
    return PacketController.getPacketsByUserId(args.userId);
  },
};

module.exports = { packets, packetById, packetsByUserId };
