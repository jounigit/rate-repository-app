import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({id}) => {
  const { data, ...result } = useQuery(GET_REPOSITORY, {
     fetchPolicy: 'cache-and-network',
     variables: { id }
   });
console.log('## Userepo hook: ', id)
  /*let repository

    console.log('## Userepo hook: ', id)
    if (error) return `Error! ${error}`;

    if (data) {
        repository = data.repository
    }*/
console.log('## Repo hook: ', data ? data.repository : undefined)
  return { repository: data ? data.repository : undefined, ...result };
};

export default useRepository;