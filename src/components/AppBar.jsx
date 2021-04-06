import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab'
import AppBarTabSignIn from './AppBarTabSignIn'
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: theme.colors.background,
    padding: 20
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
        <View>
            <AppBarTab />
            <AppBarTabSignIn />
        </View>
    </ScrollView>
   </View>
  );
};

export default AppBar;