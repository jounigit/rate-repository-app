import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../components/SignIn'
import { act } from 'react-dom/test-utils';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()

      // render the SignInContainer component, fill the text inputs and press the submit button
      const { getByTestId } = render(<SignInContainer handleSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    });
  });
});