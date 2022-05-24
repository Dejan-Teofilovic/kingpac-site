import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FONT_RIGHTEOUS, TEAM_MEMBERS } from '../../utils/constants';
import CardTeamMember from '../../components/CardTeamMember';

export default function AboutUsSection() {
  return (
    <Box py={8}>
      <Container maxWidth="xl" id="about-us">
        <Typography
          fontFamily={FONT_RIGHTEOUS}
          fontSize={{ xs: 24, sm: 36, md: 48 }}
          color={grey[300]}
          textAlign="center"
        >
          Who we are?
        </Typography>
        <Grid mt={3} container spacing={6}>
          {
            TEAM_MEMBERS.map(member => (
              <Grid key={member.id} item xs={12} sm={6} md={3}>
                <CardTeamMember data={member} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}