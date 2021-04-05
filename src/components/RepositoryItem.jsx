import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import theme from '../theme';
import ItemContent from './ItemContent';
import ItemStatics from './ItemStatics';

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 0,
    backgroundColor: theme.colors.repositoryItem
  },
  title: {
    fontSize: 20,
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.item}>
    <ItemContent
        image={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
    />

    <ItemStatics
    stargazersCount={item.stargazersCount}
    forksCount={item.forksCount}
    reviewCount={item.reviewCount}
    ratingAverage={item.ratingAverage}
    />

  </View>
);

export default RepositoryItem;