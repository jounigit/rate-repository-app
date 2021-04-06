import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text'

const AppBarTab = () => {
  return (
  <>
    <Pressable onPress={() => {} }>
        <Link to="/">
            <Text color="white" fontWeight="bold">Repositories</Text>
        </Link>
     </Pressable>
  </>
  )
};

export default AppBarTab;