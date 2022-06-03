import React, { createContext, useContext, useReducer } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import {
  ERROR,
  LOCALSTORAGE_USERDATA,
  MESSAGE_WALLET_CONNECT_ERROR,
  SCAN_API_KEY,
  WALLET_CONNECT_INFURA_ID,
  ADDRESS_OF_REWARD_POOL
} from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';
import { UserContext } from './UserContext';
import { removeItemOfLocalStorage } from '../utils/functions';

// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  currentAccount: '',
  balance: 0,
  provider: null,
  balanceOfRewardPool: 0
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
  SET_BALANCE: (state, action) => {
    return {
      ...state,
      balance: action.payload
    };
  },
  SET_PROVIDER: (state, action) => {
    return {
      ...state,
      provider: action.payload
    };
  },
  SET_BALANCE_OF_REWARD_POOL: (state, action) => {
    return {
      ...state,
      balanceOfRewardPool: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: () => Promise.resolve(),
  disconnectWallet: () => Promise.resolve(),
  setBalance: () => Promise.resolve(),
  getBalanceOfRewardPool: () => Promise.resolve()
});

//  Provider
function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);
  const { getUserdata } = useContext(UserContext);

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

  /** Connect wallet */
  const connectWallet = async () => {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const accounts = await provider.listAccounts();
      console.log('# accounts => ', accounts);

      //  Fetch current userdata
      await getUserdata(accounts[0]);

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
    } catch (error) {
      console.log('# wallet connect error', error);
      openAlert({
        severity: ERROR,
        message: MESSAGE_WALLET_CONNECT_ERROR
      });
    }
  };

  /** Disconnect wallet */
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

    dispatch({
      type: 'SET_BALANCE',
      payload: 0
    });
    removeItemOfLocalStorage(LOCALSTORAGE_USERDATA);
  };

  /**
   * Set balance
   * @param {number} balance The current balance of connected wallet
   */
  const setBalance = (balance) => {
    dispatch({
      type: 'SET_BALANCE',
      payload: balance
    });
  };

  const getBalanceOfRewardPool = async () => {
    const { result } = await (await fetch(`https://api.bscscan.com/api?module=account&action=balance&address=${ADDRESS_OF_REWARD_POOL}&tag=latest&apikey=${SCAN_API_KEY}`)).json();
    
    let balance = Number(result) * 10 ** -18;
    dispatch({
      type: 'SET_BALANCE_OF_REWARD_POOL',
      payload: Number(balance.toFixed(2))
    });
  };
  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet,
        disconnectWallet,
        setBalance,
        getBalanceOfRewardPool
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };