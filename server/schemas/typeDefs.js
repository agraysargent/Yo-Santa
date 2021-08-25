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
        event: [Event]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        events()
    }
`
