import React from 'react';
import { Outlet } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { PrimaryButton } from '../components/styledComponents';

export default function GameLayout() {
  return (
    <Stack className="bg-main" height="100vh">
      <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }} py={3} px={3}>
        <PrimaryButton
          sx={{ fontSize: { xs: 14, md: 18 }, px: 4 }}
          component={RouterLink}
          to="/"
        >
          Go to homepage
        </PrimaryButton>
      </Stack>
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Stack>
  );
}