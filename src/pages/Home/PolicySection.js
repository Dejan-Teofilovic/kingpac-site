import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MotionDiv from '../../components/MotionDiv';
import {
  FONT_RIGHTEOUS,
  POLICIES_BUY,
  POLICIES_SELL,
  VAR_FADE_IN_UP,
  SUCCESS,
  WARNING
} from '../../utils/constants';
import CustomLinearProgressbar from '../../components/CustomLinearProgressBar';

export default function PolicySection({ bgcolor, id }) {
  const [buyPercentage, setBuyPercentage] = useState(0);
  const [sellPercentage, setSellPercentage] = useState(0);

  useEffect(() => {
    let _buyPercentage = 0;
    let _sellPercentage = 0;

    POLICIES_BUY.forEach((dataItem, index) => {
      _buyPercentage += dataItem.value;
    });

    POLICIES_SELL.forEach((dataItem, index) => {
      _sellPercentage += dataItem.value;
    });

    setBuyPercentage(_buyPercentage);
    setSellPercentage(_sellPercentage);
  }, []);

  return (
    <Box bgcolor={bgcolor} py={8} id={id}>
      <Container maxWidth="lg">
        <MotionDiv variants={VAR_FADE_IN_UP}>
          <Typography
            fontFamily={FONT_RIGHTEOUS}
            fontSize={{ xs: 24, sm: 36, md: 48 }}
            color={grey[300]}
            textAlign="center"
          >
            Buy&nbsp;
            <Typography
              component="span"
              fontSize="inherit"
              color={grey[300]}
              fontWeight={800}
            >&</Typography>
            &nbsp;sell tax breakdown
          </Typography>
        </MotionDiv>
        <Grid container spacing={8} mt={1}>
          <Grid item xs={12} md={6}>
            <Typography
              fontFamily={FONT_RIGHTEOUS}
              fontSize={{ xs: 18, md: 24 }}
              textAlign="center"
              color={grey[300]}
            >BUY ({buyPercentage}%)</Typography>
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Stack mt={3} spacing={2}>
                {
                  POLICIES_BUY.map(dataItem => (
                    <CustomLinearProgressbar
                      key={dataItem.label}
                      label={dataItem.label}
                      value={dataItem.value}
                      variant={SUCCESS}
                    />
                  ))
                }
              </Stack>
            </MotionDiv>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              fontFamily={FONT_RIGHTEOUS}
              fontSize={{ xs: 18, md: 24 }}
              textAlign="center"
              color={grey[300]}
            >SELL ({sellPercentage}%)</Typography>
            <MotionDiv variants={VAR_FADE_IN_UP}>
              <Stack mt={3} spacing={2}>
                {
                  POLICIES_SELL.map(dataItem => (
                    <CustomLinearProgressbar
                      key={dataItem.label}
                      label={dataItem.label}
                      value={dataItem.value}
                      variant={WARNING}
                    />
                  ))
                }
              </Stack>
            </MotionDiv>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}