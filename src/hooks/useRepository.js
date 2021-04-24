import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {
    console.log('## Repohook vars: ', variables)
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
     fetchPolicy: 'cache-and-network',
     variables,
   });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews?.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews?.pageInfo.endCursor,
        ...variables,
      },
    });
  };

console.log('## Repo hook: ', data?.repository)

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;