const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Event {
        _id: ID
        name: String
        description: String
        duration: Number
        price: Number
    }

    type Users {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Order {
        _id: ID
        purchaseDate: String
        events: [Event]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        events(_id: ID, type: String): [Event]
        event(_id: ID!): Event
        user: User
        order(_id: ID!): Order
        checkout(events: [ID]!): Checkout
        }
        
        type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(event: [ID]!): Order
        login(email: String!, password: String!): Auth
        }
`

module.exports = typeDefs;