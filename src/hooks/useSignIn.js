import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
      const { data } = await mutate({
        variables: { username, password }
      });

      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return result
  };

  return [signIn, result];
};

export default useSignIn;