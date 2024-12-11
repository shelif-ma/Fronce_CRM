import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <Container
      component={motion.div}
      maxWidth='xs'
      sx={{ textAlign: 'center', mt: 10 }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant='h2' color='error' sx={{ fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant='h4' sx={{ mt: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          The page you are looking for does not exist.
        </Typography>

        <Button
          component={motion.div}
          href='/'
          variant='contained'
          color='primary'
          sx={{ mt: 3 }}
          whileHover={{ scale: 1.1 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
