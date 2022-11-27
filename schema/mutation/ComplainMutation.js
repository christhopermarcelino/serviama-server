const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLID,
} = require("graphql");

const { ComplainType, ComplainStatusEnum } = require("../typedef/ComplainType");

const ComplainController = require("../../controller/ComplainController");

const createComplain = {
  name: "createComplain",
  type: ComplainType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, args) => {
    const { title, description, userId } = args;

    return ComplainController.createComplain({
      title,
      description,
      userId,
    });
  },
};

const updateComplainById = {
  name: "updateComplainById",
  type: ComplainType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: ComplainStatusEnum },
  },
  resolve: (_, args) => {
    const { id, title, description, status } = args;

    return ComplainController.updateComplainById({
      id,
      title,
      description,
      status,
    });
  },
};

const deleteComplainById = {
  name: "deleteComplainById",
  type: ComplainType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    return ComplainController.deleteComplainById(args.id);
  },
};

module.exports = { createComplain, updateComplainById, deleteComplainById };
