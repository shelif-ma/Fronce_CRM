import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Layout from '../layouts/Layout';
import NotFound from '../Pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<Layout />} />
        <Route path='/error' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
