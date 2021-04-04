import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Fullname: ' + item.fullName}</Text>
    <Text>{'Description: ' + item.description}</Text>
    <Text>{'Language: ' + item.language}</Text>
    <Text>{'Starts: ' + item.stargazersCount}</Text>
    <Text>{'Forks: ' + item.forksCount}</Text>
    <Text>{'Reviews: ' + item.reviewCount}</Text>
    <Text>{'Rating: ' + item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;