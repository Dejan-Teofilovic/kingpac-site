import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import Loading from '../components/Loading';

export default function MainLayout() {
  return (
    <Box className="bg-main" minHeight="100vh">
      <TopNavbar />
      <Outlet />
      <Loading />
    </Box>
  );
}