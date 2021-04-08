import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
 mutation Authorize(
  $username: String!
  $password: String!
  ) {
    authorize(credentials: {username: $username, password: $password}) {
      accessToken
    }
  }
`;


export const AuthorizeInput = gql`
  input AuthorizeInput {
    username: String!
    password: String!
  }
`;