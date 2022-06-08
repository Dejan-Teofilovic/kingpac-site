import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { 
  URL_TELEGRAM_COMMUNITY, 
  FONT_AMARANTH, 
  FONT_RIGHTEOUS, 
  VAR_FADE_IN_UP, 
  VAR_FADE_IN_DOWN 
} from '../../utils/constants';
import { PrimaryButton } from '../../components/styledComponents';
import MotionDiv from '../../components/MotionDiv';

export default function CommunitySection() {
  return (
    <Box
      sx={{ 
        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url(/assets/images/community_background.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      py={12}
      id="community"
    >
      <Container maxWidth="lg" id="community">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Join our community
          </Typography>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography mt={3} fontFamily={FONT_AMARANTH} color={grey[300]} fontSize={18} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_DOWN}>
          <Stack mt={3} direction="row" justifyContent="center" alignItems="center">
            <PrimaryButton
              sx={{ fontSize: { xs: 14, md: 18 }, px: 4 }}
              component={Link}
              href={URL_TELEGRAM_COMMUNITY}
              target="_blank"
            >
              Join our Telegram channel
            </PrimaryButton>
          </Stack>
        </MotionDiv>
      </Container>
    </Box >
  );
}