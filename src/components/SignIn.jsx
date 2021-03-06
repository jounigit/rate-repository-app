import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

import useSignIn from '../hooks/useSignIn';
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
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" testID="usernameField" />
      <FormikTextInput name="password" placeholder="password" testID="passwordField" />
      <Pressable style={styles.button} onPress={onSubmit} testID="submitButton">
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ handleSubmit }) => {
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
  );
};

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

      await signIn({ username, password });
      history.push("/");
  };

  return <SignInContainer handleSubmit={onSubmit} />
};

export default SignIn;