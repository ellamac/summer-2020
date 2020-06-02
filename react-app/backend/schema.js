const { gql } = require('apollo-server');

module.exports = gql`
  type Place {
    id: ID!
    name: String!
    address: String!
    info: String
    image: String
  }
  type Host {
    id: ID!
    name: String!
    phone: String
    email: String
  }
  type Orchestra {
    id: ID!
    name: String!
    host: Host
    accommodation: Place
  }

  type Event {
    name: String!
    time: Time!
    place: [Place!]
    id: ID!
    participants: [Orchestra!]
    description: String!
  }
  type Time {
    starts: String!
    ends: String
  }
  type Query {
    eventCount: Int!
    allEvents: [Event!]!
    allOrchestras: [Orchestra!]!
    allHosts: [Host!]!
    allPlaces: [Place!]!
    findEvent(name: String!): [Event]
    findPlace(name: String!): [Place]
  }

  type Mutation {
    addHost(name: String!, phone: String, email: String): Host

    addPlace(
      name: String!
      address: String!
      info: String
      image: String
    ): Place

    addOrchestra(name: String!, accommodation: String, host: String): Orchestra

    addEvent(
      name: String!
      starts: String!
      ends: String
      description: String!
      place: [String!]
      participants: [String!]
    ): Event
  }
`;
