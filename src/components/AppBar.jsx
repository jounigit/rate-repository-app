import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab'
import AppBarTabSignIn from './AppBarTabSignIn'
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //  flexDirection: "row",
    //  justifyContent: "space-between",
    height: 100,
    backgroundColor: theme.colors.background,
    padding: 20
  },
      flexItem: {
        marginRight: 10,
      },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal style={{paddingTop: 40}}>
        <View style={styles.flexItem}>
            <AppBarTab />
        </View>
         <View style={styles.flexItem}>
            <AppBarTabSignIn />
        </View>
    </ScrollView>
   </View>
  );
};

export default AppBar;