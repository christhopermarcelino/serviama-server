const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const GallonType = new GraphQLObjectType({
  name: "GallonType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    brand: { type: new GraphQLNonNull(GraphQLString) },
    stock: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = GallonType;
