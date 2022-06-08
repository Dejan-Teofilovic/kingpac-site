import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { SuccessLinearProgressbar, WarningLinearProgressbar } from './styledComponents';
import { FONT_AMARANTH, SUCCESS, WARNING } from '../utils/constants';

export default function CustomLinearProgressbar({ value, label, variant }) {
  return (
    <Box>
      <Typography
        fontFamily={FONT_AMARANTH}
        fontSize={{ xs: 14, md: 18 }}
        color={grey[300]}
      >{label}</Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        {
          variant === SUCCESS && (
            <SuccessLinearProgressbar
              variant="determinate"
              value={value}
              sx={{ width: '90%' }}
            />
          )
        }
        {
          variant === WARNING && (
            <WarningLinearProgressbar
              variant="determinate"
              value={value}
              sx={{ width: '90%' }}
            />
          )
        }
        <Typography
          fontFamily={FONT_AMARANTH}
          fontSize={{ xs: 14, md: 18 }}
          color={grey[300]}
        >{value}%</Typography>
      </Stack>
    </Box>
  );
}