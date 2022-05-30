import
React,
{
  createContext,
  useReducer
}
  from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import {
  WALLET_CONNECT_INFURA_ID,
} from '../utils/constants';
// import { AlertMessageContext } from './AlertMessageContext';

// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  currentAccount: '',
  provider: null
};

const handlers = {
  SET_WALLET_CONNECTED: (state, action) => {
    return {
      ...state,
      walletConnected: action.payload
    };
  },
  SET_CURRENT_ACCOUNT: (state, action) => {
    return {
      ...state,
      currentAccount: action.payload
    };
  },
  SET_PROVIDER: (state, action) => {
    return {
      ...state,
      provider: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: () => Promise.resolve(),
  disconnectWallet: () => Promise.resolve()
});

//  Provider
function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { openAlert } = useContext(AlertMessageContext);

  const getWeb3Modal = async () => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: WALLET_CONNECT_INFURA_ID
          },
        },
      }
    });
    return web3Modal;
  };

  const connectWallet = async () => {
    const web3Modal = await getWeb3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const accounts = await provider.listAccounts();
    dispatch({
      type: 'SET_CURRENT_ACCOUNT',
      payload: accounts[0]
    });

    dispatch({
      type: 'SET_WALLET_CONNECTED',
      payload: true
    });

    dispatch({
      type: 'SET_PROVIDER',
      payload: provider
    });
  };

  const disconnectWallet = async () => {
    dispatch({
      type: 'SET_CURRENT_ACCOUNT',
      payload: ''
    });

    dispatch({
      type: 'SET_WALLET_CONNECTED',
      payload: false
    });

    dispatch({
      type: 'SET_PROVIDER',
      payload: null
    });
  };

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet,
        disconnectWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };