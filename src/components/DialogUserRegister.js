import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Close, Error, Telegram, Twitter } from '@mui/icons-material';
import * as yup from 'yup';
import { useFormik } from "formik";
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS } from '../utils/constants';
import { CustomDialog, PrimaryTextField, SecondaryButton } from './styledComponents';
import useUser from '../hooks/useUser';
import useWallet from '../hooks/useWallet';
import { removeAtMarkPrefix } from '../utils/functions';

const validSchema = yup.object().shape({
  twitterUsername: yup.string().required('Your username of twitter is required.'),
  telegramUsername: yup.string().required('Your username of telegram is required.')
});

export default function DialogUserRegister({ open, handleClose }) {
  const { registerUser } = useUser();
  const { currentAccount, balance } = useWallet();

  const formik = useFormik({
    initialValues: {
      twitterUsername: '',
      telegramUsername: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      handleClose();
      let twitterUsername = removeAtMarkPrefix(values.twitterUsername);
      let telegramUsername = removeAtMarkPrefix(values.telegramUsername);

      return registerUser({
        twitterUsername,
        telegramUsername,
        walletAddress: currentAccount,
        balance
      });
    }
  });
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
            name="twitterUsername"
            label="Twitter username"
            sx={{ mt: 2, fontFamily: FONT_AMARANTH }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Twitter sx={{ color: grey[900] }} />
                </InputAdornment>
              )
            }}
            value={formik.values.twitterUsername}
            onChange={formik.handleChange}
            error={formik.touched.twitterUsername && Boolean(formik.errors.twitterUsername)}
            helperText={
              formik.touched.twitterUsername && formik.errors.twitterUsername ? (
                <Typography
                  component="span"
                  fontFamily={FONT_AMARANTH}
                  fontSize={12}
                  fontWeight={700}
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Error sx={{ fontSize: 20 }} />&nbsp;
                  {formik.touched.twitterUsername && formik.errors.twitterUsername}
                </Typography>) : (<></>)
            }
            fullWidth
          />
          <PrimaryTextField
            name="telegramUsername"
            label="Telegram username"
            sx={{ mt: 2, fontFamily: FONT_AMARANTH }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Telegram sx={{ color: grey[900] }} />
                </InputAdornment>
              )
            }}
            value={formik.values.telegramUsername}
            onChange={formik.handleChange}
            error={formik.touched.telegramUsername && Boolean(formik.errors.telegramUsername)}
            helperText={
              formik.touched.telegramUsername && formik.errors.telegramUsername ? (
                <Typography
                  component="span"
                  fontFamily={FONT_AMARANTH}
                  fontSize={12}
                  fontWeight={700}
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Error sx={{ fontSize: 20 }} />&nbsp;
                  {formik.touched.telegramUsername && formik.errors.telegramUsername}
                </Typography>) : (<></>)
            }
            fullWidth
          />
        </Stack>

      </DialogContent>
      <DialogActions sx={{ bgcolor: COLOR_PRIMARY, p: 2 }}>
        <SecondaryButton
          sx={{ bgcolor: 'black', color: COLOR_PRIMARY }}
          onClick={formik.handleSubmit}
        >
          Submit
        </SecondaryButton>
        <SecondaryButton sx={{ bgcolor: 'black', color: COLOR_PRIMARY }} onClick={handleClose}>
          Cancel
        </SecondaryButton>
      </DialogActions>
    </CustomDialog>
  );
}