const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;