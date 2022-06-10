import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FONT_AMARANTH, FONT_RIGHTEOUS, VAR_FADE_IN_UP, VAR_FADE_IN_DOWN } from '../../utils/constants';
import MotionDiv from '../../components/MotionDiv';

export default function IntroductionSection({ bgcolor, id }) {
  return (
    <Box bgcolor={bgcolor} py={8} id={id}>
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
            textAlign="justify"
            mt={5}
            px={{ xs: 0, md: 16 }}
            sx={{ textJustify: 'distribute' }}
          >
            KingPac is a decentralized and driven by the community.
            Buying our tokens not only helps you to earn but we also provide amusing utilities that our audience would love to interact with.
          </Typography>
          <Typography
            fontFamily={FONT_AMARANTH}
            color={grey[400]}
            fontSize={{ xs: 14, md: 18 }}
            textAlign="justify"
            mt={2}
            px={{ xs: 0, md: 16 }}
          >
            King Pac Is a Nostalgic Restructuring of the Retro Arcade game Pac Man.
            Players are required to buy our Tokens that would be accessible to our Infinite Snowball Hurdle, and achievement over a Hurdle would reward you with a sureshot payout that would be deduced from a colossal gaming reward pool that is emerged out of every transaction which ensures the Winner takes it all.
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
            textAlign="justify"
            mt={5}
            px={{ xs: 0, md: 16 }}
          >
            The best of the best players would be competing with you. Be aware we publish a leaderboard that reflects your position every 10 seconds among the Players.
            No stress if you lose, we respect non-Quitters.
            We would appreciate your hard work by showing nothing but just the best attempts made!
            Gain your edge and be on the top.
            This is the only crucial time where you can break all the records and make a legacy of your own provided we promise to keep your wallets full.
          </Typography>
          <Typography
            fontFamily={FONT_AMARANTH}
            color={grey[400]}
            fontSize={{ xs: 14, md: 18 }}
            textAlign="justify"
            mt={2}
            px={{ xs: 0, md: 16 }}
          >
            MAY THE BEST PLAYERS WIN !
          </Typography>
        </MotionDiv>
      </Container>
    </Box>
  );
}