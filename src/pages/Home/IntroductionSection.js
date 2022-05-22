import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { FONT_AMARANTH, FONT_RIGHTEOUS } from '../../utils/constants';
import { grey } from '@mui/material/colors';

export default function IntroductionSection() {
  return (
    <Container maxWidth="xl" id="introduction">
      <Typography
        fontFamily={FONT_RIGHTEOUS}
        fontSize={{ xs: 24, sm: 36, md: 48 }}
        color={grey[300]}
        textAlign="center"
      >
        How to play game?
      </Typography>
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
      <Stack direction="row" justifyContent="center" mt={6}>
        <Box component="img" src="/assets/images/introduction.png" width={{ xs: '80%', md: '40%' }} />
      </Stack>
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
    </Container>
  );
}