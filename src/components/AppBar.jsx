import React from 'react';
import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import useAuthStorage from '../hooks/useAuthStorage';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Pressable style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const AppBar = () => {
  const authStorage = useAuthStorage();
  const { AuthUser, refetch } = useAuthorizedUser();

    const remove = () => async () => {
      await authStorage.removeAccessToken();
      refetch();
    }

    const isAuth = (AuthUser && AuthUser.authorizedUser === null) ? false : true;

  console.log('# AppBar authUser: ', AuthUser && AuthUser.authorizedUser);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        { isAuth && <Link to="/review" component={AppBarTab}>Create a review</Link> }
        { !isAuth && <Link to="/signin" component={AppBarTab}>Sign in</Link> }
        { isAuth && <AppBarTab onPress={remove() }>Sign out</AppBarTab> }

      </ScrollView>
    </View>
  );
};

export default AppBar;