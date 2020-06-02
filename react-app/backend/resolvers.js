const { UserInputError } = require('apollo-server');

const Host = require('./models/host');
const Place = require('./models/place');
const Orchestra = require('./models/orchestra');
const Event = require('./models/event');

module.exports = {
  Query: {
    eventCount: () => Event.countDocuments(),
    allEvents: async () => {
      return await Event.find().populate('place').populate('participants');
    },
    allPlaces: async () => {
      return await Place.find();
    },
    allOrchestras: async () => {
      return await Orchestra.find().populate('accommodation').populate('host');
    },
    allHosts: async () => {
      return await Host.find();
    },
    findEvent: async (root, args) => {
      const events = await Event.find({ name: args.name });
      return events;
    },
    findPlace: async (root, args) => {
      const places = await Place.find({ name: args.name });
      return places;
    },
  },
  Event: {
    time: (root) => {
      return {
        starts: root.starts,
        ends: root.ends,
      };
    },
  },
  Mutation: {
    addHost: async (root, { name, phone, email }) => {
      let host = new Host({ name, phone, email });
      try {
        await host.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: { name, phone, email },
        });
      }
      return host;
    },
    addPlace: async (root, { name, address, info, image }) => {
      let place = new Place({ name, address, info, image });
      try {
        await place.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: { name, address, info, image },
        });
      }
      return place;
    },
    addOrchestra: async (root, { name, accommodation, host }) => {
      let orchestra = new Orchestra({ name });
      try {
        const place = await Place.findOne({ name: accommodation });
        if (place) {
          orchestra.accommodation = place;
        }
        const hostFound = await Host.findOne({ name: host });
        if (host) {
          orchestra.host = hostFound;
        }
        await orchestra.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: { name, accommodation, host },
        });
      }
      return orchestra;
    },
    addEvent: async (
      root,
      { name, starts, ends, description, place, participants }
    ) => {
      let event = new Event({ name, starts, ends, description });
      try {
        const places = await Place.find({ name: { $in: place } });
        if (places) {
          event.place = places;
        }
        const participantsFound = await Orchestra.find({
          name: { $in: participants },
        });
        if (participantsFound) {
          event.participants = participantsFound;
        }
        await event.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: { name, accommodation, host },
        });
      }
      return event;
    },
  },
};
