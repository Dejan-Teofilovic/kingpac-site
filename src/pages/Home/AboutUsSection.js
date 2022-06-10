import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FONT_AMARANTH, FONT_RIGHTEOUS, VAR_FADE_IN_UP, VAR_FADE_IN_DOWN } from '../../utils/constants';
import MotionDiv from '../../components/MotionDiv';

export default function AboutUsSection({ bgcolor }) {
  return (
    <Box bgcolor={bgcolor} py={8}>
      <Container maxWidth="xl" id="about-us">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Know Us!
          </Typography>
        </MotionDiv>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={9}>
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Typography
                fontFamily={FONT_AMARANTH}
                color={grey[400]}
                fontSize={{ xs: 14, md: 18 }}
                textAlign="justify"
                mt={2}
                px={{ xs: 0, md: 16 }}
              >
                A cast of highly enthusiastic crypto investors that struggles to provide earning opportunities.
                We as a community confess that our game is one of the most entertaining and light-hearted that can be played by anyone.
                We have launched this platform with the aim that we could refresh the foggy childhood memories that are lost somewhere in today's world.
              </Typography>
              <Typography
                fontFamily={FONT_AMARANTH}
                color={grey[400]}
                fontSize={{ xs: 14, md: 18 }}
                textAlign="justify"
                mt={2}
                px={{ xs: 0, md: 16 }}
              >
                By the way of King Pac, we tend to bring happiness and positivity to the people
                and bring the community a little closer to each other.
              </Typography>
              <Typography
                fontFamily={FONT_AMARANTH}
                color={grey[400]}
                fontSize={{ xs: 14, md: 18 }}
                textAlign="justify"
                mt={2}
                px={{ xs: 0, md: 16 }}
              >
                Trust us the journey would be REVOLUTIONARY.
              </Typography>
            </MotionDiv>
          </Grid>
          <Grid item xs={12} md={3}>
            <MotionDiv variants={VAR_FADE_IN_DOWN}>
              <Stack direction="row" width="100%" justifyContent={{ xs: 'center', md: 'start' }}>
                <Box component="img" src="/assets/images/about_us_hero.png" alt="About us" width="70%" />
              </Stack>
            </MotionDiv>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}