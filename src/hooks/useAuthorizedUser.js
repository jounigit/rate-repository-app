import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data: AuthUser, error, loading, refetch } = useQuery(AUTHORIZED_USER);

   //if (loading) return null;
   if (error) return `Error! ${error}`;

  //console.log('## Useauthuser: ', AuthUser)

  return { AuthUser, loading, refetch };
};

export default useAuthorizedUser;

/*

   const reFetch = () => {
    console.log('## Useauthuser refetch: ', AuthUser)
    refetch()
    console.log('## Useauthuser refetch2: ', AuthUser)
   };
*/