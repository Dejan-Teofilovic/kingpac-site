import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Storage } from '@mui/icons-material';
import { FONT_RIGHTEOUS } from '../utils/constants';
import { grey } from '@mui/material/colors';

export default function NoData() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" p={6} spacing={3}>
      <Storage sx={{ fontSize: { xs: 18, sm: 24, md: 32 }, color: grey[700] }} />
      <Typography
        fontFamily={FONT_RIGHTEOUS}
        fontSize={{ xs: 20, sm: 28, md: 36 }}
        color={grey[700]}
      >
        No Data
      </Typography>
    </Stack>
  );
}