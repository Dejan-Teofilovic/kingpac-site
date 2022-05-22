import { Box } from '@mui/material';
import React from 'react';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Box bgcolor="#111111" py={6}>
        <IntroductionSection />
      </Box>
    </>
  );
}