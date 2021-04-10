const { UserInputError } = require("apollo-server-errors");
const Actor = require("../../model/actor.model");

module.exports = {
  Query: {
    getActors: async () => {
      try {
        return await Actor.find().exec();
      } catch (err) {
        return new Error("Something went wrong");
      }
    },
  },
  Mutation: {
    createActor: async (_, { name }) => {
      try {
        return await new Actor({ name });
      } catch (err) {
        return UserInputError(err);
      }
    },
  },
};
