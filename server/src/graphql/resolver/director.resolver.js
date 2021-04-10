const { UserInputError } = require("apollo-server-errors");
const Director = require("../../model/director.model");

module.exports = {
  Query: {
    getDirectors: async () => {
      try {
        return await Director.find().exec();
      } catch (err) {
        return new Error("Something went wrong");
      }
    },
    getDirector: async (_, { id }) => {
      try {
        return await Director.findOne({ _id: id }).exec();
      } catch (err) {
        return new Error(err);
      }
    },
  },
  Mutation: {
    createDirector: async (_, { name }) => {
      try {
        const director = await Director.create({ name });
        return director;
      } catch (err) {
        return new UserInputError(err);
      }
    },
  },
};
