require("dotenv").config();
const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");

const PORT = process.env.PORT || 3001;

const schema = require('./schema/Schema')

app.get("/", (req, res) => [
  res.json({
    success: true,
    message: "Serviama API",
  }),
]);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
