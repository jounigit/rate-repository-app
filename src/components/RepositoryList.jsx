import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const renderItem = ({ item }) => (
       <RepositoryItem item={item} />
    );

     return (
               <FlatList
                 data={repositoryNodes}
                 keyExtractor={({ id }) => id}
                 renderItem={renderItem}
                 ItemSeparatorComponent={ItemSeparator}
               />
             );

};

export default RepositoryList;
