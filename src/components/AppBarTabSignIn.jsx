import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link, Button } from "react-router-native";
import Text from './Text'

import useAuthStorage from '../hooks/useAuthStorage';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const AppBarTabSignIn = () => {
  const authStorage = useAuthStorage();
  const { AuthUser, refetch } = useAuthorizedUser();

 console.log('# AppBarTab siginin: ', AuthUser && AuthUser.authorizedUser);

  const remove = async () => {
    await authStorage.removeAccessToken();
    refetch();
  }

  if (AuthUser && AuthUser.authorizedUser === null) {
    console.log('# AppBarTab: ', AuthUser.authorizedUser);
      return (
         <Pressable onPress={() => {} }>
                <Link to="/signin">
                    <Text color="white" fontWeight="bold">Sign in</Text>
                </Link>
         </Pressable>
      )
  };

  return (
     <Pressable onPress={() => remove() }>
             <Text color="white" fontWeight="bold">Remove</Text>
      </Pressable>
  )
};

export default AppBarTabSignIn;

/*     <Pressable onPress={() => remove() }>
               <Text color="white" fontWeight="bold">Remove</Text>
        </Pressable>*/