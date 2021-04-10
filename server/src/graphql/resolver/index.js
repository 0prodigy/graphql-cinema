const actorResolver = require("./actor.resolver");
const directorResolver = require("./director.resolver");

module.exports = {
  ...actorResolver,
  ...directorResolver,
};
