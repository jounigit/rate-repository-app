import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text'

const AppBarTabSignIn = () => {
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