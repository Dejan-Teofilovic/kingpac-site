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
                    <TableCell align="center">Rank</TableCell>
                    <TableCell align="center">Wallet address</TableCell>
                    <TableCell align="center">Telegram username</TableCell>
                    <TableCell align="center">Twitter username</TableCell>
                    <TableCell align="center">Completed Levels</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    WINNERS.map(winner => (
                      <TableRow key={winner.rank}>
                        <TableCell align="center">{winner.rank}</TableCell>
                        <TableCell align="center">{winner.walletAddress}</TableCell>
                        <TableCell align="center">{winner.telegramUsername}</TableCell>
                        <TableCell align="center">{winner.twitterUsername}</TableCell>
                        <TableCell align="center">{winner.completedLevels}</TableCell>
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
                    <TableCell align="center">Rank</TableCell>
                    <TableCell align="center">Wallet address</TableCell>
                    <TableCell align="center">Telegram username</TableCell>
                    <TableCell align="center">Twitter username</TableCell>
                    <TableCell align="center">Completed Levels</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    WINNERS.map(winner => (
                      <TableRow key={winner.rank}>
                        <TableCell align="center">{winner.rank}</TableCell>
                        <TableCell align="center">{winner.walletAddress}</TableCell>
                        <TableCell align="center">{winner.telegramUsername}</TableCell>
                        <TableCell align="center">{winner.twitterUsername}</TableCell>
                        <TableCell align="center">{winner.completedLevels}</TableCell>
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