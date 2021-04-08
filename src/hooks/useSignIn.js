import { useMutation } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
        const result = await mutate({ variables: { username, password } });
        return result
  };

  //console.log('## Mutate: ', result)

  return [signIn, result];
};

export default useSignIn;