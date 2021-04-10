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
};
