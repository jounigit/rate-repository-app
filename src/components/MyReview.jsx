import React, { useState, useEffect } from 'react';

import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

import ReviewItem from './ReviewItem';

const ItemSeparator = () => <View style={{ height: 10, }} />;

const MyReview = () => {
   const variables = { "includeReviews": true }
  const { AuthUser, loading } = useAuthorizedUser(
    variables
  );

  if (!AuthUser) return null;

    console.log('## MyReviews uth: ', AuthUser)

   const reviews = AuthUser.authorizedUser ? AuthUser.authorizedUser.reviews.edges.map((edge) => edge.node) : [];
console.log('## MyReviews: ', reviews)

  return ( !loading &&
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} myReview={true} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};

export default MyReview;

/*

*/