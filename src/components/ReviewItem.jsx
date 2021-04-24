import React from 'react';

import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format, parseISO } from 'date-fns'

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

  const ReviewItem = ({ review, myReview=false }) => {
  const { id, text, rating, createdAt, user, repository } = review
  console.log('## ReviewItem: ', myReview)

  const creatingDay = format(parseISO( createdAt ), 'dd.MM.yyyy')

    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.contentContainer}>
              { myReview &&
                   <Text
                    style={styles.nameText}
                    fontWeight="bold"
                    fontSize="subheading"
                    numberOfLines={1}
                    testID="repositoryItem"
                  >
                    {repository.fullName}
                  </Text>

              }
              { !myReview &&
                   <Text
                    style={styles.nameText}
                    fontWeight="bold"
                    fontSize="subheading"
                    numberOfLines={1}
                    testID="repositoryItem"
                  >
                    {user.username}
                  </Text>
              }

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

  export default ReviewItem;