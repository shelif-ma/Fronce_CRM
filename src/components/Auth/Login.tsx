// src/pages/Login.tsx
import React from 'react';
import AuthForm from '../../common/Forms/AuthForm';

const Login: React.FC = () => {
  const handleLogin = (formData: Record<string, string>) => {
    console.log('Login Form Data:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Login via Google');
  };

  const handleFacebookLogin = () => {
    console.log('Login via Facebook');
  };

  const handleAppleLogin = () => {
    console.log('Login via Apple');
  };

  return (
    <AuthForm
      title='Login'
      fields={[
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
      ]}
      buttonText='Login'
      onSubmit={handleLogin}
      onGoogleLogin={handleGoogleLogin}
      onFacebookLogin={handleFacebookLogin}
      onAppleLogin={handleAppleLogin}
    />
  );
};

export default Login;
