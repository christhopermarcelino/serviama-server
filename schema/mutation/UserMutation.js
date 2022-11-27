const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const UserType = require("../typedef/UserType");

const {
  createUser: createUserController,
} = require("../../controller/UserController");

const createUser = {
  name: "createUser",
  type: UserType,
  args: {
    nrp: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone_number: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, args) => {
    const { nrp, name, email, phone_number, password } = args;

    return createUserController({ nrp, name, email, phone_number, password });
  },
};

const updateUserById = {
  name: "updateUserById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: (parent, args) => {},
};

const deleteUserById = {
  name: "deleteUserById",
  type: null,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {},
};

module.exports = { createUser, updateUserById, deleteUserById };
