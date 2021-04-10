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
    getActor: async (_, { id }) => {
      try {
        return await Actor.findOne({ _id: id }).exec();
      } catch (err) {
        return new Error(err);
      }
    },
  },
  Mutation: {
    createActor: async (_, { name }) => {
      try {
        const actor = await Actor.create({ name });
        return actor;
      } catch (err) {
        return new UserInputError(err);
      }
    },
  },
};
