import React, { useState } from 'react';
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
import { PrimaryCard, SecondaryTableContainer } from '../../components/styledComponents';
import { FONT_RIGHTEOUS, VAR_FADE_IN_UP, WINNERS } from '../../utils/constants';
import useUser from '../../hooks/useUser';
import NoData from '../../components/NoData';

export default function LeaderboardSection({ bgcolor, id }) {
  const { getWinners, winnersOfThisWeek, winnersOfLastWeek } = useUser();

  useState(() => {
    getWinners();
  }, []);

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
                    <TableCell align="center" sx={{ display: { xs: 'none', md: 'block' } }}>Twitter username</TableCell>
                    <TableCell align="center">Completed Levels</TableCell>
                    <TableCell align="center">Reward</TableCell>
                  </TableRow>
                </TableHead>

                {
                  winnersOfThisWeek.length > 0 && (
                    <TableBody>
                      {
                        winnersOfThisWeek.map(winner => (
                          <TableRow key={winner.rank}>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.rank}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.walletAddress}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.telegramUsername}</TableCell>
                            <TableCell
                              align="center"
                              sx={{ display: { xs: 'none', md: 'block' }, maxWidth: { xs: 60, md: 'none' } }}
                            >
                              {winner.twitterUsername}
                            </TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.completedLevels}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.reward}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  )
                }
              </Table>
              {
                winnersOfThisWeek.length === 0 && (<NoData />)
              }
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
                    <TableCell align="center" sx={{ display: { xs: 'none', md: 'block' } }}>Twitter username</TableCell>
                    <TableCell align="center">Completed Levels</TableCell>
                    <TableCell align="center">Reward</TableCell>
                  </TableRow>
                </TableHead>

                {
                  winnersOfLastWeek.length > 0 && (
                    <TableBody>
                      {
                        winnersOfLastWeek.map(winner => (
                          <TableRow key={winner.rank}>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.rank}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.walletAddress}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.telegramUsername}</TableCell>
                            <TableCell
                              align="center"
                              sx={{ display: { xs: 'none', md: 'block' }, maxWidth: { xs: 60, md: 'none' } }}
                            >
                              {winner.twitterUsername}
                            </TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.completedLevels}</TableCell>
                            <TableCell align="center" sx={{ maxWidth: { xs: 60, md: 'none' } }}>{winner.reward}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  )
                }
              </Table>
              {
                winnersOfLastWeek.length === 0 && (<NoData />)
              }
            </SecondaryTableContainer>
          </PrimaryCard>
        </MotionDiv>
      </Container>
    </Box>
  );
}