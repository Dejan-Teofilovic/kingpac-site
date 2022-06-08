import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import {
  FONT_RIGHTEOUS,
  TEAM_MEMBERS,
  VAR_FADE_IN_UP,
} from '../../utils/constants';
import CardTeamMember from '../../components/CardTeamMember';
import MotionDiv from '../../components/MotionDiv';
import Carousel from '../../components/Carousel';

const SLIDE_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
};

export default function OurTeamSection({ bgcolor, id }) {
  return (
    <Box bgcolor={bgcolor} py={8} id={id}>
      <Container maxWidth="xl" id="our-team">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Our Team
          </Typography>
        </MotionDiv>
        <Box mt={3}>
          <Carousel
            slideSettings={SLIDE_SETTINGS}
            carouselItemComponent={CardTeamMember}
            data={TEAM_MEMBERS}
          />
        </Box>
      </Container>
    </Box>
  );
}