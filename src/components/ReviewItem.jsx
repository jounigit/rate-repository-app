import React from 'react';

import { FlatList, View, StyleSheet, Alert, Button } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format, parseISO } from 'date-fns'

import { useHistory } from "react-router-dom";
import useDeleteReview from '../hooks/useDeleteReview';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
    buttonItem: {
      height: 45,
      flexGrow: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.roundness,
      paddingHorizontal: 35,
    },
    buttonText: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundPrimary: {
      backgroundColor: theme.colors.primary,
    },
    backgroundRed: {
      backgroundColor: "red",
    }
 });

 const ButtonItem = ({ bgColor, label, action }) => {
   const buttonStyle = [
     styles.buttonItem,
     bgColor === 'red' && styles.backgroundRed,
     bgColor === 'primary' && styles.backgroundPrimary,
   ];
   const buttontextStyle = [
     styles.buttonText,
     bgColor === 'red' && styles.backgroundRed,
     bgColor === 'primary' && styles.backgroundPrimary,
   ];
   return (
     <View style={buttonStyle}>
       <Text
           onPress={ action }
           style={buttontextStyle}
           fontWeight="bold"
           fontSize="subheading"
           color= 'white'
       >
        {label}
       </Text>
     </View>
   );
 };

  const ReviewItem = ({ review, myReview=false, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const history = useHistory();
  const { id, text, rating, createdAt, user, repository } = review

  const creatingDay = format(parseISO( createdAt ), 'dd.MM.yyyy')

 const goToRepository = () => history.push(`/repository/${repository.id}`)

 const buttonAlert = () =>
   confirmAlert({
     customUI: ({ onClose }) => {
         return (
           <div className='custom-ui'>
             <h1>Delete review</h1>
             <p>Are you sure you want to delete this review?</p>
                    <Text
                        onPress={onClose}
                        fontSize="subheading"
                        color= 'primary'
                        style={{ marginRight: 20 }}
                    >
                     CANCEL
                    </Text>
                    <Text
                        onPress={() => {
                              deleteReview( id );
                              refetch({ variables: { "includeReviews": true } });
                              onClose();
                            }
                        }
                        fontSize="subheading"
                        color= 'primary'
                    >
                     DELETE
                    </Text>
           </div>
         );
       }
   });

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
          { myReview &&
            <View style={styles.bottomContainer}>
                <ButtonItem bgColor="primary" label="View repository" action={goToRepository} />
                <ButtonItem bgColor="red" label="Delete review" action={buttonAlert} />

            </View>
          }
        </View>
    )
  };

  export default ReviewItem;

  /*

 const deleteReviewAction = () => {
     deleteReview( id );
     refetch({ variables: { "includeReviews": true } });
 }
  */