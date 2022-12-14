const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");

const { PacketType, PacketStatusEnum } = require("../typedef/PacketType");
const PacketController = require("../../controller/PacketController");

const createPacket = {
  name: "createPacket",
  type: PacketType,
  args: {
    description: { type: GraphQLString },
    sender: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    const { description, sender, userId } = args;

    return PacketController.createPacket({ description, sender, userId });
  },
};

const updatePacketById = {
  name: "updatePacketById",
  type: PacketType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    description: { type: GraphQLString },
    status: { type: PacketStatusEnum },
    sender: { type: GraphQLString },
    userId: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    const { id, description, status, sender, userId } = args;

    return PacketController.updatePacketById({
      id,
      description,
      status,
      sender,
      userId,
    });
  },
};

const deletePacketById = {
  name: "deletePacketById",
  type: PacketType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    return PacketController.getPacketById(args.id);
  },
};

module.exports = { createPacket, updatePacketById, deletePacketById };
