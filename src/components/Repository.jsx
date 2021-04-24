import React from 'react';

import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-dom'
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
 });

  const RepositoryInfo = ({ repository }) => {
     return <RepositoryItem repository={repository} githubLink={true} />
  };

 const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams()
  const variables = { id, first: 2 }

  const { repository, fetchMore, loading } = useRepository(
     variables
  );

  if (!repository) return null;

  const onEndReach = () => {
      console.log('You have reached the end of the list');
      fetchMore();
  };

   const reviews = repository.reviews ? repository.reviews.edges.map((edge) => edge.node) : [];

    console.log('## Repository reviews: ', reviews)

  return ( !loading &&
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
  )
};

export default Repository;