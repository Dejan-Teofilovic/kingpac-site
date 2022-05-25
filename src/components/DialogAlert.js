import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Typography
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { CustomDialog, SecondaryButton } from './styledComponents';
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS } from '../utils/constants';

export default function DialogAlert({ open, handleClose }) {
  return (
    <CustomDialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ py: 2, px: 3, bgcolor: COLOR_PRIMARY, fontFamily: FONT_RIGHTEOUS }}>
        Not Enough Balance
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
        {/* <DialogContentText> */}
        <Typography gutterBottom fontFamily={FONT_AMARANTH} color={grey[900]}>
          You need to hold 1,000,000 Kingpac token to play the game.<br />
          <b>
            <Link target="_blank" href="https://pancakeswap.finance/" sx={{ color: 'black', textDecoration: 'none' }}>
              Buy token.
            </Link>
          </b>
          &nbsp;And join telegram community&nbsp;
          <b>
            <Link target="_blank" href="https://t.me/KingPacToken" sx={{ color: 'black', textDecoration: 'none' }}>
              here
            </Link>
          </b>.
        </Typography>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogActions sx={{ bgcolor: COLOR_PRIMARY, p: 2 }}>
        <SecondaryButton sx={{ bgcolor: 'black', color: COLOR_PRIMARY }} onClick={handleClose}>
          Cancel
        </SecondaryButton>
      </DialogActions>
    </CustomDialog>
  );
}