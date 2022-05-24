import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FONT_RIGHTEOUS, TEAM_MEMBERS, VAR_FADE_IN_UP, VAR_FADE_IN_DOWN } from '../../utils/constants';
import CardTeamMember from '../../components/CardTeamMember';
import MotionDiv from '../../components/MotionDiv';

export default function OurTeamSection({ bgcolor }) {
  return (
    <Box bgcolor={bgcolor} py={8}>
      <Container maxWidth="xl" id="our-team">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Our Team
          </Typography>
        </MotionDiv>
        <Grid mt={3} container spacing={6}>
          {
            TEAM_MEMBERS.map(member => (
              <Grid key={member.id} item xs={12} sm={6} md={3}>
                <MotionDiv variants={VAR_FADE_IN_DOWN}>
                  <CardTeamMember data={member} />
                </MotionDiv>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}