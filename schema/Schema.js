const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {},
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {},
});

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });

module = schema;
