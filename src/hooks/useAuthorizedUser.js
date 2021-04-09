import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER, {
      fetchPolicy: 'no-cache'
    });

  console.log('## Use auth user: ', data)
  if (data) {
          console.log('## Use auth user: ', data.authorizedUser)
      }

  return { data, loading, refetch };
};

export default useAuthorizedUser;