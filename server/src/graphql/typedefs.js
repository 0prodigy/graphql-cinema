const { gql } = require("apollo-server-express");

module.exports = gql`
  type Movie {
    _id: ID!
    name: String!
    actor: Actor!
    director: Director!
    rating: Float
  }

  type Actor {
    _id: ID!
    name: String!
    movies: [Movie]
    rating: Float
  }

  type Director {
    _id: ID!
    name: String!
    movies: [Movie]
    rating: Float
  }

  type Screen {
    _id: ID!
    name: String!
    show: [Show]
  }

  type Show {
    _id: ID!
    time: String
    movie_id: ID
    ticket_price: Float
  }

  type Seat {
    _id: ID!
    id: Int!
    scree_id: ID!
    is_booked: Boolean!
    show_id: ID!
  }

  type Query {
    getActors: [Actor]
    getActor(id: String): Actor
  }

  type Mutation {
    createActor(name: String!): Actor
  }
`;
