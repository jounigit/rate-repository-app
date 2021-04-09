import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  let repositories;
  console.log('## REP query:: -loading: ', loading, ' -data: ', data)

    if (error) return `Error! ${error}`;

    if (data) {
        repositories = data.repositories
    }

  return { repositories, loading, refetch };
};

export default useRepositories;