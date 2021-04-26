import { useQuery } from '@apollo/client';

import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {
  const { data: AuthUser, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

   //if (loading) return null;
   if (error) return `Error! ${error}`;

  console.log('## Useauthuser: ', AuthUser && AuthUser.authorizedUser)

  return { AuthUser, loading, refetch };
};

export default useAuthorizedUser;

/*

*/