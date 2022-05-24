import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { PrimaryLinearProgressbar } from './styledComponents';
import { FONT_AMARANTH } from '../utils/constants';
import { grey } from '@mui/material/colors';

export default function CustomLinearProgressbar({ value, label }) {
  return (
    <Box>
      <Typography
        fontFamily={FONT_AMARANTH}
        fontSize={{ xs: 14, md: 18 }}
        color={grey[300]}
      >{label}</Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <PrimaryLinearProgressbar
          variant="determinate"
          value={value}
          sx={{ width: '90%' }}
        />
        <Typography
          fontFamily={FONT_AMARANTH}
          fontSize={{ xs: 14, md: 18 }}
          color={grey[300]}
        >{value}%</Typography>
      </Stack>
    </Box>
  );
}