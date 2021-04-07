import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {
  console.log('ENV: ', Constants.manifest.extra.APOLLO_URI);

  return (
    <NativeRouter>
        <ApolloProvider client={apolloClient}>
                <Main />
         </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
