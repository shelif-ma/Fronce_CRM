import React from 'react';
import {
  Container,
  List,
  AppBar,
  Toolbar,
  Typography,
  Card,
  IconButton,
  Box,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { iconConfig } from '../config/navConfig';

const HtmlTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: 'white',
    color: '#333',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #ddd',
  },
}));

const Layout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: `calc(99vh - 64px)`,
        position: 'relative',
      }}
    >
      <AppBar
        position='static'
        sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' color='primary'>
            Fronics
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', height: '100%', backgroundColor: '#F4F4F4' }}>
        <Box
          sx={{
            width: '5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <List>
            {iconConfig.map((icon) => (
              <HtmlTooltip
                key={icon.key}
                title={
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    {icon.tooltip}
                  </Typography>
                }
                placement='right'
              >
                <IconButton
                  onClick={() => navigate(icon.route)}
                  sx={{ marginBottom: 2, color: '#333' }}
                >
                  {icon.label}
                </IconButton>
              </HtmlTooltip>
            ))}
          </List>
        </Box>

        <Box sx={{ flex: 1, padding: '2%' }}>
          <Routes>
            <Route path='/dashboard' element={<Card>Hello Dashboard</Card>} />
            <Route path='/orders' element={<Card>Hello Orders</Card>} />
            <Route path='/customers' element={<Card>Hello Customers</Card>} />
            <Route
              path='/productCategory'
              element={<Card>Hello Products</Card>}
            />
          </Routes>
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
