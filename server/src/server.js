const connect = require("./config/db");
const { app, server } = require("./index");

const start = async () => {
  await connect();
  server.applyMiddleware({ app });

  await new Promise((resolve, reject) => app.listen({ port: 4000 }, resolve));
  console.log("🚀 server is up and running on port 4000 " + server.graphqlPath);

  app.listen(9000, () => {
    console.log("Listening on port 9000");
  });
};

start();
