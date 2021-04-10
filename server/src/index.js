const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolver");

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

module.exports = {
  app,
  server,
};
