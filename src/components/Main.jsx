import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import Repository from './Repository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Review from './Review';
import AppBar from './AppBar'
import theme from '../theme'
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    height: '100%',
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/repository/:id" exact>
          <Repository />
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