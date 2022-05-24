import React from 'react';
import {
  Box,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MotionDiv from '../../components/MotionDiv';
import { FONT_RIGHTEOUS, VAR_FADE_IN_UP, WINNERS } from '../../utils/constants';
import { PrimaryCard, SecondaryTableContainer } from '../../components/styledComponents';

export default function LeaderboardSection({ bgcolor, id }) {
  return (
    <Box bgcolor={bgcolor} py={8} id={id}>
      <Container maxWidth="lg">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Leaderboard
          </Typography>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <PrimaryCard sx={{ mt: { xs: 3, md: 6 } }}>
            <CardHeader
              title="Winners of this week"
              titleTypographyProps={{
                sx: {
                  fontFamily: FONT_RIGHTEOUS,
                  fontSize: {
                    xs: 18,
                    md: 24
                  }
                }
              }}
            />

            <SecondaryTableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Wallet address</TableCell>
                    <TableCell>Telegram username</TableCell>
                    <TableCell>Twitter username</TableCell>
                    <TableCell>Total tracking time</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    WINNERS.map(winner => (
                      <TableRow key={winner.rank}>
                        <TableCell>{winner.rank}</TableCell>
                        <TableCell>{winner.walletAddress}</TableCell>
                        <TableCell>{winner.telegramUsername}</TableCell>
                        <TableCell>{winner.twitterUsername}</TableCell>
                        <TableCell>{Math.floor(winner.trackingTime / 60)}min {winner.trackingTime % 60}s</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </SecondaryTableContainer>


          </PrimaryCard>
        </MotionDiv>
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <PrimaryCard sx={{ mt: { xs: 3, md: 6 } }}>
            <CardHeader
              title="Winners of this week"
              titleTypographyProps={{
                sx: {
                  fontFamily: FONT_RIGHTEOUS,
                  fontSize: {
                    xs: 18,
                    md: 24
                  }
                }
              }}
            />

            <SecondaryTableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Wallet address</TableCell>
                    <TableCell>Telegram username</TableCell>
                    <TableCell>Twitter username</TableCell>
                    <TableCell>Total tracking time</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    WINNERS.map(winner => (
                      <TableRow key={winner.rank}>
                        <TableCell>{winner.rank}</TableCell>
                        <TableCell>{winner.walletAddress}</TableCell>
                        <TableCell>{winner.telegramUsername}</TableCell>
                        <TableCell>{winner.twitterUsername}</TableCell>
                        <TableCell>{Math.floor(winner.trackingTime / 60)}min {winner.trackingTime % 60}s</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </SecondaryTableContainer>


          </PrimaryCard>
        </MotionDiv>
      </Container>
    </Box>
  );
}