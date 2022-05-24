import React from 'react';
import AboutUsSection from './AboutUsSection';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <AboutUsSection />
    </>
  );
}