import React from 'react';
import { DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, Stack } from '@mui/material';
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS } from '../utils/constants';
import { grey } from '@mui/material/colors';
import { Close, Telegram, Twitter } from '@mui/icons-material';
import { CustomDialog, PrimaryTextField, SecondaryButton } from './styledComponents';

export default function DialogUserRegister({ open, handleClose }) {
  return (
    <CustomDialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ py: 2, px: 3, bgcolor: COLOR_PRIMARY, fontFamily: FONT_RIGHTEOUS }}>
        Please fill the input fields.
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: grey[900]
          }}
        ><Close /></IconButton>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: COLOR_PRIMARY }}>
        <Stack spacing={2}>
          <PrimaryTextField
            label="Twitter username"
            sx={{ mt: 2, fontFamily: FONT_AMARANTH }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Twitter sx={{ color: grey[900] }} />
                </InputAdornment>
              )
            }}
            fullWidth
          />
          <PrimaryTextField
            label="Telegram username"
            sx={{ mt: 2, fontFamily: FONT_AMARANTH }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Telegram sx={{ color: grey[900] }} />
                </InputAdornment>
              )
            }}
            fullWidth
          />
        </Stack>

      </DialogContent>
      <DialogActions sx={{ bgcolor: COLOR_PRIMARY, p: 2 }}>
        <SecondaryButton sx={{ bgcolor: 'black', color: COLOR_PRIMARY }} onClick={handleClose}>
          Submit
        </SecondaryButton>
        <SecondaryButton sx={{ bgcolor: 'black', color: COLOR_PRIMARY }} onClick={handleClose}>
          Cancel
        </SecondaryButton>
      </DialogActions>
    </CustomDialog>
  );
}