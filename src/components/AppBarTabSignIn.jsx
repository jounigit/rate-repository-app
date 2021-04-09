import React from 'react';
import { useQuery } from '@apollo/client';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text'

const AppBarTabSignIn = () => {
  const authUser = useAuthorizedUser();

  console.log('## SignIn tab user: ', authUser)

  if (authUser === null) console.log('## SignIn tab user null: ', authUser)
  if (authUser) console.log('## SignIn tab user ok: ', authUser)
// {authorizedUser: null}
  return (
  <>
    <Pressable onPress={() => {} }>
        <Link to="/signin">
            <Text color="white" fontWeight="bold">Sign in</Text>
        </Link>

     </Pressable>
  </>
  )
};

export default AppBarTabSignIn;