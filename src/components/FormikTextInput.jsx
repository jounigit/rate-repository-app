import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    errorText: {
    marginBottom: 5,
    paddingBottom: 15,
     color: '#d73a4a',
    },
    input: {
      height: 40,
      marginBottom: 12,
      padding: 10,
      borderRadius: 5,
      borderColor: 'grey',
      borderWidth: 1,
    },
    errorInput: {
        borderColor: '#d73a4a',
     }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        style={[
          styles.input,
          showError && styles.errorInput
                ]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;