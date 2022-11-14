const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const GallonType = new GraphQLObjectType({
  name: "gallon",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    brand: { type: GraphQLNonNull(GraphQLString) },
    stock: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.export = GallonType;
