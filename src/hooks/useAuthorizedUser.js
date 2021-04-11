import { useQuery, NetworkStatus } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data: AuthUser, error, loading, refetch, networkStatus } = useQuery(AUTHORIZED_USER, {
        //fetchPolicy: "network-only"
      notifyOnNetworkStatusChange: true,
      //pollInterval: 500,
    });

   //if (loading) return null;
   if (error) return `Error! ${error}`;

  console.log('## Useauthuser: ', AuthUser)
 // if (AuthUser) console.log('## Useauthuser: ', AuthUser.authorizedUser);


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