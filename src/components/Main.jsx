import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar'
import theme from '../theme'
import { Platform } from "react-native";
import AuthStorage from '../utils/authStorage'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    height: '100%',
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {

    const doToken = async () => {
    const authUser = new AuthStorage();
      console.log('# Uusi token 1: ', uusiToken);
      await authUser.setAccessToken('jokutoken');

      const uusiToken = await authUser.getAccessToken()

      console.log('# Uusi token: ', uusiToken);

      await authUser.removeAccessToken();
      const poistettu = await authUser.getAccessToken()
      console.log('# Uusi token nyt: ', poistettu);
    };

    doToken();
   //console.log('## Platform: ', Platform.OS);
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
              <Route path="/signin" exact>
                  <SignIn />
              </Route>
        <Route path="/" exact>
            <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>


    </View>
  );
};

export default Main;