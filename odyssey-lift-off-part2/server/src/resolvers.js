const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
        return dataSources.trackAPI.getTrack(id);
    }
  },
  Track: {
    author: (parent, args, { dataSources }, info) => {
        return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
        return dataSources.trackAPI.getTrackModules(id);
    }
  },
};

module.exports = resolvers;