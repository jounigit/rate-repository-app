import { gql } from '@apollo/client';

import { USER_BASE_FIELDS } from './fragments';

export const AUTHORIZE = gql`
 mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
      user {
         ...userBaseFields
       }
    }
  }

  ${USER_BASE_FIELDS}
`;

export const CREATE_USER = gql`
 mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
         ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`;

export const CREATE_REVIEW = gql`
mutation createReview ($review: CreateReviewInput)
    {
      createReview(review: $review) {
        id
        userId
        repositoryId
        createdAt
      }
    }
`;

export const DELETE_REVIEW = gql`
mutation deleteReview($id: ID!) {
      deleteReview(id: $id)
  }
`;
