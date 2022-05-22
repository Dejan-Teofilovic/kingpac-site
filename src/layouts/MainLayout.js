import React from 'react';
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import Loading from '../components/Loading';

export default function MainLayout() {
  return (
    <Box className="bg-main" minHeight="100vh">
      <TopNavbar />
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Outlet />
      </Container>
      <Loading />
    </Box>
  );
}