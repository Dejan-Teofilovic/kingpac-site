import React from 'react';
import { CardContent, CardMedia, IconButton, Stack, Typography, Link } from '@mui/material';
import { LinkedIn, Telegram } from '@mui/icons-material';
import { FONT_RIGHTEOUS, FONT_AMARANTH } from '../utils/constants';
import { PrimaryCard } from './styledComponents';

export default function CardTeamMember({ dataItem }) {
  return (
    <PrimaryCard sx={{ height: '99%', mx: 1 }}>
      <Stack direction="row" justifyContent="center" width="100%" py={5}>
        <CardMedia
          component="img"
          image={dataItem.image}
          alt={dataItem.name}
          sx={{ borderRadius: '70%', border: '10px solid black', width: '70%' }}
        />
      </Stack>
      <CardContent>
        <Typography
          fontFamily={FONT_RIGHTEOUS}
          fontSize={{ xs: 24, md: 32 }}
          textAlign="center"
        >{dataItem.name}</Typography>
        <Typography
          fontFamily={FONT_AMARANTH}
          fontSize={{ xs: 18, md: 24 }}
          textAlign="center"
        >{dataItem.position}</Typography>
        <Stack mt={3} direction="row" justifyContent="center">
          <IconButton
            component={Link}
            href={dataItem.telegram}
            target="_blank"
            sx={{ color: 'black' }}
          ><Telegram sx={{ fontSize: { xs: 28, md: 32 } }} /></IconButton>
          <IconButton
            component={Link}
            href={dataItem.linkedin}
            target="_blank"
            sx={{ color: 'black' }}
          ><LinkedIn sx={{ fontSize: { xs: 28, md: 32 } }} /></IconButton>
        </Stack>
      </CardContent>
    </PrimaryCard>
  );
}