import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ethers } from 'ethers';
import {
  COLOR_PRIMARY,
  FONT_RIGHTEOUS,
  FONT_AMARANTH,
  TOKEN_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
  TOKEN_AMOUNT,
  SCAN_API_KEY
} from '../../utils/constants';
import { PrimaryButton } from '../../components/styledComponents';
import DialogAlert from '../../components/DialogAlert';
import useWallet from '../../hooks/useWallet';
import useAlertMessage from '../../hooks/useAlertMessage';
import useLoading from '../../hooks/useLoading';
import DialogUserRegister from '../../components/DialogUserRegister';

export default function HeroSection() {
  const { currentAccount, walletConnected } = useWallet();
  const { openAlert } = useAlertMessage();
  const { openLoading, closeLoading } = useLoading();

  const [dialogAlertOpened, setDialogAlertOpened] = useState(false);
  const [dialogUserRegisterOpened, setDialogUserRegisterOpened] = useState(false);

  const getBalance = async () => {
    openLoading();
    const { result } = await (await fetch(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${TOKEN_CONTRACT_ADDRESS}&address=${currentAccount}&tag=latest&apikey=${SCAN_API_KEY}`)).json();
    closeLoading();
    return Number(result);
  };

  const handleOpenDialog = async () => {
    if (walletConnected) {
      const balance = await getBalance();
      console.log('# balance => ', balance);
      if (balance < TOKEN_AMOUNT) {
        setDialogAlertOpened(true);
      } else {
        setDialogUserRegisterOpened(true);
      }
    } else {
      openAlert({ severity: 'warning', message: 'Please connect wallet.' });
    }
  };

  const handleCloseDialog = () => {
    setDialogAlertOpened(false);
    setDialogUserRegisterOpened(false);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacingx={8} pt={{ xs: 3, md: 6 }} pb={{ xs: 6, md: 12 }} alignItems="center">
        <Grid item xs={12} md={5}>
          <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} pl={{ xs: 0, md: 6 }} width="100%">
            <Box
              className="pacman"
              width={{ xs: 100, sm: 200, md: 300 }}
              height={{ xs: 100, sm: 200, md: 300 }}
            >
              <Box
                className="pacman__eye"
                position="absolute"
                top={{ xs: 20, sm: 40, md: 60 }}
                right={{ xs: 30, sm: 50, md: 80 }}
                width={{ xs: 15, sm: 25, md: 30 }}
                height={{ xs: 15, sm: 25, md: 30 }}
              />
              <Box
                className="pacman__mouth"
                position="absolute"
                width="101%"
                height="100%"
              />
              <Box
                className="pacman__food"
                position="absolute"
                top="45%"
                right={-40}
                width={{ xs: 15, sm: 20, md: 30 }}
                height={{ xs: 15, sm: 20, md: 30 }}
              />
            </Box>
          </Stack>
        </Grid>

        <Grid item md={7}>
          <Stack spacing={{ xs: 2, md: 4 }} mt={{ xs: 4, sm: 2, md: 0 }}>
            <Typography
              fontFamily={FONT_RIGHTEOUS}
              fontSize={{ xs: 28, sm: 42, md: 56 }}
              color={COLOR_PRIMARY}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              KING&nbsp;
              <Typography
                component="span"
                fontFamily="inherit"
                fontSize="inherit"
                color={grey[200]}
              >PAC</Typography>
            </Typography>
            <Typography fontFamily={FONT_AMARANTH} color={grey[400]} fontSize={18} textAlign={{ xs: 'center', md: 'left' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <PrimaryButton sx={{ fontSize: { xs: 14, md: 18 }, px: 4 }} onClick={handleOpenDialog}>
                Play Game
              </PrimaryButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <DialogAlert open={dialogAlertOpened} handleClose={handleCloseDialog} />
      <DialogUserRegister open={dialogUserRegisterOpened} handleClose={handleCloseDialog} />
    </Container>
  );
}