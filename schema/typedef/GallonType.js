const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const GallonType = new GraphQLObjectType({
  name: "gallon",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    brand: { type: new GraphQLNonNull(GraphQLString) },
    stock: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = GallonType;
