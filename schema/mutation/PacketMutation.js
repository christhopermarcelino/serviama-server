const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const { PacketStatusEnum } = require("../typedef/PacketType");
const UserType = require("../typedef/UserType");

const createPacket = {
  name: "createPacket",
  type: UserType,
  args: {
    description: { type: GraphQLString },
    sender: { type: new GraphQLNonNull(GraphQLString) },
    receiver: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {},
};

const updatePacketById = {
  name: "updatePacketById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    status: { type: PacketStatusEnum },
    sender: { type: GraphQLString },
    receiver: { type: GraphQLString },
  },
  resolve: (parent, args) => {},
};

const deletePacketById = {
  name: "deletePacketById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = { createPacket, updatePacketById, deletePacketById };
