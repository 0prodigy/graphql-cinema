const { gql } = require("apollo-server-express");

module.exports = gql`

    type Movie {
        _id: ID!
        name: String!
        actor: Actor!
        director:Director!
        rating:Number
    }

    type Actor {
        _id:ID!
        name:String!
        movies:Movie
        rating:Number
    }

    type Screen {
        _id:ID!
        name:String!
        show: [
            Show
        ]
    }

    type Show {
        _id:ID! 
        time:String
        movie_id:Movie._id
        ticket_price:Number
    }

    type Seat {
        _id:ID!
        id:Number
        scree_id:Screen._id
        is_booked:Boolean
        show_id:Show._id
    }

`;
