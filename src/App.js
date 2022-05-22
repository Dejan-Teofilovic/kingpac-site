import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Routes from './Routes';
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from './utils/constants';

function App() {
  return (
    <MoralisProvider serverUrl={MORALIS_SERVER_URL} appId={MORALIS_APP_ID}>
      <LoadingProvider>
        <AlertMessageProvider>
          <WalletProvider>
            <Router>
              <Routes />
            </Router>
          </WalletProvider>
        </AlertMessageProvider>
      </LoadingProvider>
    </MoralisProvider>
  );
}

export default App;
