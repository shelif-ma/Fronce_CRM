import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import AuthForm from '../AuthForm';

export default {
  title: 'Components/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const LoginForm = Template.bind({});
LoginForm.args = {
  title: 'Login',
  fields: [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ],
  buttonText: 'Login',
  onSubmit: (formData: Record<string, string>) => {
    console.log('Login Form Data:', formData);
  },
  onGoogleLogin: () => alert('Google Login'),
  onFacebookLogin: () => alert('Facebook Login'),
  onAppleLogin: () => alert('Apple Login'),
};

export const SignUpForm = Template.bind({});
SignUpForm.args = {
  title: 'Sign Up',
  fields: [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ],
  buttonText: 'Sign Up',
  onSubmit: (formData: Record<string, string>) => {
    console.log('SignUp Form Data:', formData);
  },
  onGoogleLogin: () => alert('Google Login'),
  onFacebookLogin: () => alert('Facebook Login'),
  onAppleLogin: () => alert('Apple Login'),
};

export const ForgotPasswordForm = Template.bind({});
ForgotPasswordForm.args = {
  title: 'Forgot Password',
  fields: [{ name: 'email', label: 'Email', type: 'email' }],
  buttonText: 'Send Reset Link',
  onSubmit: (formData: Record<string, string>) => {
    console.log('Forgot Password Form Data:', formData);
  },
};
