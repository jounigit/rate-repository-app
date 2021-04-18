import { useApolloClient, useMutation } from '@apollo/client';
import useSignIn from '../hooks/useSignIn';

import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
    const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
       const user = { username, password };

       const payload = await mutate({ variables: { user } });
       const { data } = payload;

      if (data && data.createUser) {
        await signIn({ username, password });
      }

      return payload;
  };

  return [signUp, result];
};

export default useSignUp;