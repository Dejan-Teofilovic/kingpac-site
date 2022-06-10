import React from 'react';
import {
  Box,
  Stack,
  Icon as MuiIcon,
  Link,
  Typography
} from '@mui/material';
import { Icon } from '@iconify/react';
import { COLOR_DARK, COLOR_PRIMARY, FONT_RIGHTEOUS, URL_BSCSCAN, URL_DEXTOOLS, URL_INSTAGRAM, URL_PANCAKESWAP, URL_TELEGRAM_COMMUNITY, URL_TWITTER } from '../utils/constants';
// import MotionDiv from './MotionDiv';
import { PrimaryIconButton, TextButton } from './styledComponents';

const SOCIAL_LINKS = [
  {
    name: 'Telegram',
    icon: 'bxl:telegram',
    href: URL_TELEGRAM_COMMUNITY
  },
  {
    name: 'Twitter',
    icon: 'akar-icons:twitter-fill',
    href: URL_TWITTER
  },
  {
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    href: URL_INSTAGRAM
  }
];

const CRYPTO_LINKS = [
  {
    name: 'Pancakeswap',
    href: URL_PANCAKESWAP
  },
  {
    name: 'Bscscan',
    href: URL_BSCSCAN
  },
  {
    name: 'Dextools',
    href: URL_DEXTOOLS
  }
];

export default function Footer() {
  return (
    <Box>
      <Stack bgcolor="#131313" py={3} justifyContent="center" alignItems="center" spacing={2}>
        <Stack direction="row" justifyContent="center">
          <Box
            component="img"
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
          />
        </Stack>
        <Typography
          color="white"
          textAlign="center"
          fontSize={{ xs: 20, md: 28 }}
          fontWeight={900}
        >
          KING PAC
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={3}>
          {
            SOCIAL_LINKS.map((dataItem, index) => (
              <PrimaryIconButton key={index} component={Link} href={dataItem.href} target="_blank">
                <MuiIcon sx={{ color: COLOR_DARK, fontSize: 14 }}>
                  <Icon icon={dataItem.icon} />
                </MuiIcon>
              </PrimaryIconButton>
            ))
          }
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ flexFlow: 'wrap' }}
        >
          {
            CRYPTO_LINKS.map((dataItem, index) => (
              <TextButton
                key={index}
                component={Link}
                href={dataItem.href}
                target="_blank"
                sx={{ color: COLOR_PRIMARY }}
              >
                {dataItem.name}
              </TextButton>
            ))
          }
        </Stack>
        <Typography
          color={COLOR_PRIMARY}
          textAlign="center"
          fontSize={{ xs: 14, md: 16 }}
          fontFamily={FONT_RIGHTEOUS}
        >
          © {new Date().getFullYear()} Kingpac
        </Typography>
      </Stack>
    </Box>
  );
}