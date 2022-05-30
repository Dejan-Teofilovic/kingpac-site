import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { PrimaryButton, TextButton } from './styledComponents';
import { FONT_RIGHTEOUS, ROUTES } from '../utils/constants';
import useWallet from '../hooks/useWallet';

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function TopNavbar() {
  const navigate = useNavigate();
  const { connectWallet, walletConnected, disconnectWallet } = useWallet();

  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', py: 2 }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* For Mobile */}
          <IconButton
            size="large"
            sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* For Mobile */}
          <CustomizedDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button component={RouterLink} to="/">
                  <Box component="img" src="/assets/images/logo.png" width={50} />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  ROUTES.map(route => (
                    <ListItem key={route.path}>
                      <ListItemButton
                        sx={{ color: grey[300], fontFamily: FONT_RIGHTEOUS }}
                        component={Link}
                        href={route.path}
                      >
                        {route.name}
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </CustomizedDrawer>

          {/* Logo for desktop */}
          <Button component={RouterLink} to="/" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box component="img" src="/assets/images/logo.png" width={50} ml={1} />
          </Button>

          <Box flexGrow={1}>
            <Stack direction="row" justifyContent="center">
              {/* Logo for desktop */}
              <Button component={RouterLink} to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box component="img" src="/assets/images/logo.png" width={70} ml={1} />
              </Button>
            </Stack>
          </Box>
          {
            ROUTES.map(route => (
              <TextButton
                key={route.path}
                sx={{ mr: 4, fontWeight: 600, color: grey[300], display: { xs: 'none', md: 'flex' } }}
                component={Link}
                href={route.path}
              >{route.name}</TextButton>
            ))
          }

          {
            walletConnected ? (
              <PrimaryButton
                variant="contained"
                onClick={handleDisconnect}
              >Disconnect</PrimaryButton>
            ) : (
              <PrimaryButton
                variant="contained"
                onClick={() => connectWallet()}
              >Connect</PrimaryButton>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}