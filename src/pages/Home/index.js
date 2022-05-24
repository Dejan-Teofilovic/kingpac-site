import React, { createElement } from 'react';
import AboutUsSection from './AboutUsSection';
import CommunitySection from './CommunitySection';
import FaqSection from './FaqSection';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import LeaderboardSection from './LeaderboardSection';
import OurTeamSection from './OurTeamSection';

const SECTIONS = [
  {
    id: 1,
    pageSection: LeaderboardSection
  },
  {
    id: 2,
    pageSection: IntroductionSection
  },
  {
    id: 3,
    pageSection: AboutUsSection
  },
  {
    id: 4,
    pageSection: OurTeamSection
  },
  {
    id: 5,
    pageSection: FaqSection
  }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      {
        SECTIONS.map(sectionItem => (
          sectionItem.id % 2 === 1 ? (
            createElement(sectionItem.pageSection, {
              bgcolor: '#111111',
              key: sectionItem.id
            })
          ) : (
            createElement(sectionItem.pageSection, {
              bgcolor: 'black',
              key: sectionItem.id
            })
          )
        ))
      }
      <CommunitySection />
    </>
  );
}