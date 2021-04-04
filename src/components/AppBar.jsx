import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab'
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: 20
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>

    <AppBarTab />
  {/* ... */}
  </View>;
};

export default AppBar;