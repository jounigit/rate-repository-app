import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

import useSignUp from '../hooks/useSignUp';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from "react-router-dom";

import useAuthorizedUser from '../hooks/useAuthorizedUser';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
      //margin: 12,
      padding: 14,
  },
     button: {
       backgroundColor: theme.colors.primary,
       borderRadius: 5,
       padding: 6,
       height: 40,
       //width: '70%',
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
  username: '',
  password: '',
  confirmation: ''
};

const validationSchema = yup.object().shape({
    username: yup.string()
    .min(1)
    .max(30)
    .required('Username is required'),
    password: yup.string()
    .min(5)
    .max(50)
    .required('Password is required'),
    confirmation: yup.string()
    .oneOf([yup.ref('password')],'Password does not match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" testID="usernameField" />
      <FormikTextInput name="password" placeholder="password" testID="passwordField" />
      <FormikTextInput name="confirmation" placeholder="password confirmation" testID="confirmationField" />
      <Pressable style={styles.button} onPress={onSubmit} testID="submitButton">
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ handleSubmit }) => {
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
  );
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

      await signUp({ username, password });
      history.push("/");
  };

  return <SignUpContainer handleSubmit={onSubmit} />
};

export default SignUp;