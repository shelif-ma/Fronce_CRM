import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

interface AuthFormProps {
  title: string;
  fields: { name: string; label: string; type?: string }[];
  buttonText: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: Record<string, string>) => void;
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
  onAppleLogin?: () => void;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  textAlign: 'center',
  border: '2px solid red',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  marginTop: theme.spacing(2),
}));

const SocialButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderColor: theme.palette.grey[300],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  buttonText,
  onSubmit,
  onGoogleLogin,
  onFacebookLogin,
  onAppleLogin,
}) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <StyledContainer disableGutters maxWidth={false}>
      <Box sx={{ padding: 5 }}>
        <Typography variant='h4' color='text.primary' gutterBottom>
          {title}
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type || 'text'}
              fullWidth
              margin='normal'
              variant='outlined'
              onChange={handleChange}
              required
            />
          ))}
          <StyledButton type='submit' variant='contained' fullWidth>
            {buttonText}
          </StyledButton>
        </Box>
        {(onGoogleLogin || onFacebookLogin || onAppleLogin) && (
          <>
            <Divider sx={{ my: 3 }}>Or</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {onGoogleLogin && (
                <SocialButton
                  variant='outlined'
                  fullWidth
                  onClick={onGoogleLogin}
                >
                  Login with Google
                </SocialButton>
              )}
              {onFacebookLogin && (
                <SocialButton
                  variant='outlined'
                  fullWidth
                  onClick={onFacebookLogin}
                >
                  Login with Facebook
                </SocialButton>
              )}
              {onAppleLogin && (
                <SocialButton
                  variant='outlined'
                  fullWidth
                  onClick={onAppleLogin}
                >
                  Login with Apple
                </SocialButton>
              )}
            </Box>
          </>
        )}
      </Box>
    </StyledContainer>
  );
};

export default AuthForm;
