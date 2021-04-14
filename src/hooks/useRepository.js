import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({id}) => {
  const { data, error, loading } = useQuery(
  GET_REPOSITORY,
  {
    variables: { id },
  });
  let repository;

    console.log('## Userepo hook: ', id)
    if (error) return `Error! ${error}`;

    if (data) {
        repository = data.repository
    }
console.log('## Repo hook: ', repository)
  return { repository, loading };
};

export default useRepository;