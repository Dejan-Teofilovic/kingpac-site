import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <Box className="bg-main" minHeight="100vh">
      <TopNavbar />
      <Outlet />
      <Footer />
    </Box>
  );
}