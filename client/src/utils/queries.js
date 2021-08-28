import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($events: [ID]!) {
    checkout(events: $events) {
      session
    }
  }
`;

// For icebox profile functionality
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        events {
          _id
          name
          description
          duration
          price
        }
      }
    }
  }
`;
