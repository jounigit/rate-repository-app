import { gql, useQuery } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ){
      repositories(
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        edges {
          node {
            ...repositoryBaseFields
            ratingAverage
            reviewCount
          }
        }
      }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query getRepository( $id: ID!){
        repository(id: $id)  {
            ...repositoryBaseFields
            ratingAverage
            reviewCount
            reviews {
                  edges {
                    node {
                      id
                      text
                      rating
                      createdAt
                      user {
                        id
                        username
                      }
                    }
                  }
                }
          }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const AUTHORIZED_USER = gql`
  query {
      authorizedUser {
          ...userBaseFields
       }
  }

  ${USER_BASE_FIELDS}
`;