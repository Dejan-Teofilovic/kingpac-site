import React from 'react';
import AboutUsSection from './AboutUsSection';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import OurTeamSection from './OurTeamSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <AboutUsSection />
      <OurTeamSection />
    </>
  );
}