import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar'
import theme from '../theme'
import { Platform } from "react-native";

import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    height: '100%',
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {

    const {data, loading, refetch} = useAuthorizedUser();
    //const authUser = useAuthorizedUser();
   //console.log('## Platform: ', Platform.OS);
   //{ data } console.log('# Main authuser: ', data);
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