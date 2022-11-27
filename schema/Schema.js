const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users, user } = require("./query/UserQuery");
const { gallons, gallon } = require("./query/GallonQuery");
const { gallonOrders, gallonOrderById } = require("./query/GallonOrderQuery");
const { complains, complainById } = require("./query/ComplainQuery");
const { packets, packetById, packetsByUserId } = require("./query/PacketQuery");

const {
  createUser,
  updateUserById,
  deleteUserById,
} = require("./mutation/UserMutation");
const {
  createPacket,
  updatePacketById,
  deletePacketById,
} = require("./mutation/PacketMutation");
const {
  createComplain,
  updateComplainById,
  deleteComplainById,
} = require("./mutation/ComplainMutation");
const {
  createGallon,
  updateGallonById,
  deleteGallonById,
} = require("./mutation/GallonMutation");
const {
  createGallonOrder,
  updateGallonOrderById,
  deleteGallonOrderById,
} = require("./mutation/GallonOrderMutation");

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    users,
    user,
    gallons,
    gallon,
    gallonOrders,
    gallonOrderById,
    complains,
    complainById,
    // packets,
    // packetById,
    // packetsByUserId,
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createUser,
    // updateUserById,
    // deleteUserById,
    createGallon,
    updateGallonById,
    deleteGallonById,
    createGallonOrder,
    updateGallonOrderById,
    deleteGallonOrderById,
    createComplain,
    updateComplainById,
    deleteComplainById,
    // createPacket,
    // updatePacketById,
    // deletePacketById,
  },
});

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });

module.exports = schema;
