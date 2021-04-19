import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const queryFn = ({ orderBy, orderDirection }) => {
    console.log('## Repository queryFN: ', orderBy, ' :: ', orderDirection)
   const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
             orderBy,
             orderDirection
         }
    });

    return { data, error, loading, refetch }
}

const useRepositories = ({value}) => {

  let repositories, orderBy, orderDirection;

    if (value==="latest") {
          orderBy="CREATED_AT", orderDirection="DESC"
          const { data, error, loading, refetch } = queryFn({orderBy, orderDirection})
      if (error) return `Error! ${error}`;
      if (data) { repositories = data.repositories }

     return { repositories, loading, refetch };
    }

    if (value==="highest") {
          orderBy="RATING_AVERAGE", orderDirection="DESC"
          const { data, error, loading, refetch } = queryFn({orderBy, orderDirection})

          if (error) return `Error! ${error}`;
          if (data) { repositories = data.repositories }

         return { repositories, loading, refetch };
    }

    if (value==="lowest") {
          orderBy="RATING_AVERAGE", orderDirection="ASC"
          const { data, error, loading, refetch } = queryFn({orderBy, orderDirection})

          if (error) return `Error! ${error}`;
          if (data) { repositories = data.repositories }

          return { repositories, loading, refetch };
    }

  return { repositories };
};

export default useRepositories;