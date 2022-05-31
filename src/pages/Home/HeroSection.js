import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import {
  COLOR_PRIMARY,
  FONT_RIGHTEOUS,
  FONT_AMARANTH,
  TOKEN_CONTRACT_ADDRESS,
  TOKEN_AMOUNT,
  SCAN_API_KEY,
  VAR_FADE_IN_UP,
  VAR_FADE_IN_DOWN,
  URL_GAME_SITE,
  WARNING
} from '../../utils/constants';
import { PrimaryButton } from '../../components/styledComponents';
import DialogAlert from '../../components/DialogAlert';
import useWallet from '../../hooks/useWallet';
import useAlertMessage from '../../hooks/useAlertMessage';
import useLoading from '../../hooks/useLoading';
import DialogUserRegister from '../../components/DialogUserRegister';
import MotionDiv from '../../components/MotionDiv';
import useUser from '../../hooks/useUser';

export default function HeroSection() {
  const { currentAccount, walletConnected, setBalance } = useWallet();
  const { openAlert } = useAlertMessage();
  const { openLoading, closeLoading } = useLoading();
  const { currentUserdata, updateBalance } = useUser();

  const [dialogAlertOpened, setDialogAlertOpened] = useState(false);
  const [dialogUserRegisterOpened, setDialogUserRegisterOpened] = useState(false);

  const getBalance = async () => {
    try {
      const { result } = await (await fetch(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${TOKEN_CONTRACT_ADDRESS}&address=${currentAccount}&tag=latest&apikey=${SCAN_API_KEY}`)).json();
      return Number(result);
    } catch (error) {
      openAlert({
        severity: 'error',
        message: 'Network error. Please try again.'
      });
    }
  };

  const handleOpenDialog = async () => {
    if (walletConnected) {
      openLoading();
      const balance = await getBalance();
      setBalance(balance);
      if (currentUserdata) {
        await updateBalance(currentUserdata.idWalletAddress, balance);
        if (balance > TOKEN_AMOUNT) {
          setDialogAlertOpened(true);
          closeLoading();
        } else {
          window.location.replace(URL_GAME_SITE);
        }
      } else {
        setDialogUserRegisterOpened(true);
        closeLoading();
      }
    } else {
      openAlert({ severity: WARNING, message: 'Please connect wallet.' });
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
          <MotionDiv variants={VAR_FADE_IN_UP}>
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
          </MotionDiv>
        </Grid>

        <Grid item md={7}>
          <Stack spacing={{ xs: 2, md: 4 }} mt={{ xs: 4, sm: 2, md: 0 }}>
            <MotionDiv variants={VAR_FADE_IN_UP}>
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
            </MotionDiv>
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Typography fontFamily={FONT_AMARANTH} color={grey[400]} fontSize={18} textAlign={{ xs: 'center', md: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </MotionDiv>

            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <MotionDiv variants={VAR_FADE_IN_DOWN}>
                <PrimaryButton sx={{ fontSize: { xs: 14, md: 18 }, px: 4 }} onClick={handleOpenDialog}>
                  Play Game
                </PrimaryButton>
              </MotionDiv>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <DialogAlert open={dialogAlertOpened} handleClose={handleCloseDialog} />
      <DialogUserRegister open={dialogUserRegisterOpened} handleClose={handleCloseDialog} />
    </Container>
  );
}