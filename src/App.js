import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Routes from './Routes';
import { createTheme, ThemeProvider } from '@mui/material';
import { UserProvider } from './contexts/UserContext';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AlertMessageProvider>
          <UserProvider>
            <WalletProvider>
              <Router>
                <Routes />
              </Router>
            </WalletProvider>
          </UserProvider>
        </AlertMessageProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
