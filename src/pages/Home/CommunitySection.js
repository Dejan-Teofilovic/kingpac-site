import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { COMMUNITY_TELEGRAM_URL, FONT_AMARANTH, FONT_RIGHTEOUS } from '../../utils/constants';
import { grey } from '@mui/material/colors';
import { PrimaryButton } from '../../components/styledComponents';

export default function CommunitySection() {
  return (
    <Box
      sx={{ background: 'url(/assets/images/community_background.jpg) no-repeat', backgroundSize: 'cover' }}
      py={8}
      id="community"
    >
      <Container maxWidth="lg" id="our-team">
        <Typography
          fontFamily={FONT_RIGHTEOUS}
          fontSize={{ xs: 24, sm: 36, md: 48 }}
          color={grey[300]}
          textAlign="center"
        >
          Join our community
        </Typography>
        <Typography mt={3} fontFamily={FONT_AMARANTH} color={grey[300]} fontSize={18} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Stack mt={3} direction="row" justifyContent="center" alignItems="center">
          <PrimaryButton
            sx={{ fontSize: { xs: 14, md: 18 }, px: 4 }}
            component={Link}
            href={COMMUNITY_TELEGRAM_URL}
            target="_blank"
          >
            Join our Telegram channel
          </PrimaryButton>
        </Stack>
      </Container>
    </Box >
  );
}