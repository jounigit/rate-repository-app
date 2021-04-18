import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

import useReview from '../hooks/useReview';
import { useHistory } from "react-router-dom";


import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
      padding: 14,
  },
     button: {
       backgroundColor: theme.colors.primary,
       borderRadius: 5,
       padding: 6,
       height: 40,
       justifyContent: 'center',
       alignItems: 'center',
       elevation: 5,
     },
      buttonText: {
         fontSize: 16,
         fontWeight: theme.fontWeights.bold,
         color: theme.colors.textWhite
       },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Owner\'s username is a required'),
    repositoryName: yup.string().required('Repository\'s name is required'),
    rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is a required number between 0 and 100'),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" testID="ownerField" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" testID="repositoryField" />
      <FormikTextInput type="number" name="rating" placeholder="Rating between 0 and 100" testID="ratingField" />
      <FormikTextInput name="text" placeholder="Review" multiline="true" testID="reviewField" />
      <Pressable style={styles.button} onPress={onSubmit} testID="submitButton">
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export const ReviewContainer = ({ handleSubmit }) => {
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
  );
};

const Review = () => {
    const [createReview] = useReview();
    const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    createReview({ ownerName, repositoryName, rating, text });

/*    if (data && data.createReview) {
        const id = data.createReview.repositoryId;
        history.push(`/repository/${id}`);
      }
*/
  };

  return <ReviewContainer handleSubmit={onSubmit} />
};

export default Review;

/*
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, text });
      const id = data.createReview.repositoryId;
      history.push(`/repository/${id}`);

    } catch(error){
      console.log('#SUBMITS error: ', error.message);
      history.push(`/`);
    }

    if (errors) {
        console.log('#SUBMITS error: ', errors, ' :: ', errors.message);
        history.push(`/`);
    }

    if (data && data.createReview) {
        const id = data.createReview.repositoryId;
        history.push(`/repository/${id}`);
      }
*/