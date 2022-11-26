const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { getUsers, getUserById } = require("./query/UserQuery");
const { getGallons, getGallonById } = require("./query/GallonQuery");
const {
  getGallonOrders,
  getGallonOrderById,
  getGallonOrdersByUserId,
} = require("./query/GallonOrderQuery");
const {
  getComplains,
  getComplainById,
  getComplainsByUserId,
} = require("./query/ComplainQuery");
const {
  getPackets,
  getPacketById,
  getPacketsByUserId,
} = require("./query/PacketQuery");

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
    getUsers,
    getUserById,
    getGallons,
    getGallonById,
    getGallonOrders,
    getGallonOrderById,
    getGallonOrdersByUserId,
    getComplains,
    getComplainById,
    getComplainsByUserId,
    getPackets,
    getPacketById,
    getPacketsByUserId,
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createUser,
    updateUserById,
    deleteUserById,
    createGallon,
    updateGallonById,
    deleteGallonById,
    createGallonOrder,
    updateGallonOrderById,
    deleteGallonOrderById,
    createComplain,
    updateComplainById,
    deleteComplainById,
    createPacket,
    updatePacketById,
    deletePacketById,
  },
});

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });

module.exports = schema;
