import React from 'react';
import { Box } from '@mui/material';

export default function BackgroundBox({ children, sx }) {
  return (
    <Box
      sx={{
        ...sx,
        background: 'url(/assets/images/hero_bg.jpg) no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {children}
    </Box>
  );
}