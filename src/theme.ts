import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#6C757D',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212529',
      secondary: '#6C757D',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
