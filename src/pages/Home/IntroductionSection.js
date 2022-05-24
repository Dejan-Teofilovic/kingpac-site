import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FONT_AMARANTH, FONT_RIGHTEOUS, VAR_FADE_IN_UP, VAR_FADE_IN_DOWN } from '../../utils/constants';
import MotionDiv from '../../components/MotionDiv';

export default function IntroductionSection() {
  return (
    <Box bgcolor="#111111" py={8}>
      <Container maxWidth="xl" id="introduction">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            How to play game?
          </Typography>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_AMARANTH}
            color={grey[400]}
            fontSize={{ xs: 14, md: 18 }}
            textAlign={{ xs: 'center', md: 'left' }}
            mt={5}
            px={{ xs: 0, md: 16 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Stack direction="row" justifyContent="center" mt={6}>
            <Box component="img" src="/assets/images/introduction.png" width={{ xs: '80%', md: '40%' }} />
          </Stack>
        </MotionDiv>

        <MotionDiv variants={VAR_FADE_IN_DOWN}>
          <Typography
            fontFamily={FONT_AMARANTH}
            color={grey[400]}
            fontSize={{ xs: 14, md: 18 }}
            textAlign={{ xs: 'center', md: 'left' }}
            mt={5}
            px={{ xs: 0, md: 16 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </MotionDiv>
      </Container>
    </Box>
  );
}