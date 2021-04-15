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
  owner: '',
  repository: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
    owner: yup.string().required('Owner\'s username is a required'),
    repository: yup.string().required('Repository\'s name is required'),
    rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is a required number between 0 and 100'),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="owner" placeholder="Repository owner name" testID="ownerField" />
      <FormikTextInput name="repository" placeholder="Repository name" testID="repositoryField" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" testID="ratingField" />
      <FormikTextInput name="review" placeholder="Review" multiline="true" testID="reviewField" />
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

const SignIn = () => {
    //const [review] = useReview();
    const history = useHistory();

  const onSubmit = async (values) => {
    const { owner, repository, rating, review } = values;
    console.log('#SUBMITS: ', owner,' :: ', repository,' :: ', rating,' :: ', review);
    /*try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }*/
  };

  return <ReviewContainer handleSubmit={onSubmit} />
};

export default SignIn;