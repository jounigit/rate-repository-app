import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format, parseISO } from 'date-fns'
//import format from 'date-fns/format'

import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-dom'
import { GET_REPOSITORY } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    height: 70,
    //backgroundColor: 'red',
  },
  ratingText: {
   color: theme.colors.primary,
   width: 70,
   height: 70,
   borderWidth: 2,
   borderColor: theme.colors.primary,
   borderRadius: 70/2,
   paddingVertical: 25,
   textAlign: 'center',
   textAlignVertical: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  createText: {
    marginBottom: 15,
  },
    separator: {
      height: 10,
    },
 });

  const RepositoryInfo = ({ repository }) => {
     return <RepositoryItem repository={repository} githubLink={true} />
  };

  const ReviewItem = ({ review }) => {
  const { id, text, rating, createdAt, user } = review

  const creatingDay = format(parseISO( createdAt ), 'dd.MM.yyyy')

    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text
                style={styles.nameText}
                fontWeight="bold"
                fontSize="subheading"
                numberOfLines={1}
                testID="repositoryItem"
              >
                {user.username}
              </Text>
              <Text
                style={styles.createText}
                color="textSecondary"
               >
                {creatingDay}
              </Text>
              <Text style={styles.descriptionText} >
                {text}
              </Text>
            </View>
          </View>
        </View>
    )
  };

 const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  let { id } = useParams()
  let repository, reviews

    const { data, error, loading } = useQuery(GET_REPOSITORY,
      { variables: { id } }
    );

    if (!data) return null;
    if (data) {
        repository = data.repository
        reviews = repository.reviews
            ? repository.reviews.edges.map((edge) => edge.node)
            : [];
    }

    console.log('## Repository reviews: ', reviews)

  return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
        // ...
      />
  )
};

export default Repository;
