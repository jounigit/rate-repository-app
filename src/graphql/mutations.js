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

/*
        id
            user{
          id
          username
        }
        repository{
          name
          fullName
        }
        userId
        repositoryId
        rating
        createdAt
        text
      }
*/