import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

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
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

const SignIn = () => {

    const onSubmit = (values) => {
      const username = values.username;
      console.log(values);
    };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;