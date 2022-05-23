import 
  React, 
  { 
    createContext, 
    // useContext, 
    // useEffect, 
    useReducer 
  } 
from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
import {
  // ERROR,
  // CHAIN_ID,
  // SWITCH_ERROR_CODE,
  // CHAIN_NAME,
  // RPC_URLS,
  // BLOCK_EXPLORER_URLS,
  // NATIVE_CURRENCY_NAME,
  // NATIVE_CURRENCY_SYMBOL,
  // DECIMALS,
  WALLET_CONNECT_INFURA_ID,
} from '../utils/constants';
// import { AlertMessageContext } from './AlertMessageContext';
// import { LoadingContext } from './LoadingContext';

// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  currentAccount: '',
  tokenId: 0,
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
  SET_TOKEN_ID: (state, action) => {
    return {
      ...state,
      tokenId: action.payload
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
  // const { openLoading, closeLoading } = useContext(LoadingContext);

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
    console.log('# accounts => ', accounts);
    dispatch({
      type: 'SET_CURRENT_ACCOUNT',
      payload: accounts[0]
    });
    dispatch({
      type: 'SET_WALLET_CONNECTED',
      payload: true
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
  };

  // useEffect(() => {
  // (async () => {
  //   if (chainId) {
  //     if (chainId === CHAIN_ID) {
  //       dispatch({
  //         type: 'SET_CURRENT_ACCOUNT',
  //         payload: account
  //       });

  //       dispatch({
  //         type: 'SET_WALLET_CONNECTED',
  //         payload: true
  //       });
  //     } else {
  //       if (window.ethereum) {
  //         //  If the current network isn't the expected one, switch it to the expected one.
  //         try {
  //           await window.ethereum.request({
  //             method: 'wallet_switchEthereumChain',
  //             params: [{ chainId: `0x${CHAIN_ID.toString(16)}` }],
  //           });

  //           dispatch({
  //             type: 'SET_CURRENT_ACCOUNT',
  //             payload: account
  //           });

  //           dispatch({
  //             type: 'SET_WALLET_CONNECTED',
  //             payload: true
  //           });

  //         } catch (switchError) {
  //           //  If the expected network isn't existed in the metamask.
  //           if (switchError.code === SWITCH_ERROR_CODE) {
  //             await window.ethereum.request({
  //               method: 'wallet_addEthereumChain',
  //               params: [
  //                 {
  //                   chainId: `0x${CHAIN_ID.toString(16)}`,
  //                   chainName: CHAIN_NAME,
  //                   rpcUrls: RPC_URLS,
  //                   blockExplorerUrls: BLOCK_EXPLORER_URLS,
  //                   nativeCurrency: {
  //                     name: NATIVE_CURRENCY_NAME,
  //                     symbol: NATIVE_CURRENCY_SYMBOL, // 2-6 characters length
  //                     decimals: DECIMALS,
  //                   }
  //                 },
  //               ],
  //             });
  //             dispatch({
  //               type: 'SET_CURRENT_ACCOUNT',
  //               payload: account
  //             });

  //             dispatch({
  //               type: 'SET_WALLET_CONNECTED',
  //               payload: true
  //             });
  //           } else {
  //             dispatch({
  //               type: 'SET_CURRENT_ACCOUNT',
  //               payload: ''
  //             });

  //             dispatch({
  //               type: 'SET_WALLET_CONNECTED',
  //               payload: false
  //             });

  //             openAlert({
  //               severity: ERROR,
  //               message: 'Wallet connection failed.'
  //             });
  //           }
  //         }
  //       } else {
  //         openAlert({ severity: 'error', message: 'Please install Metamask.' });
  //         return;
  //       }
  //     }
  //   }
  // })();
  // closeLoading();
  // console.log(chainId);
  // }, [chainId]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch({
  //       type: 'SET_CURRENT_ACCOUNT',
  //       payload: account
  //     });

  //     dispatch({
  //       type: 'SET_WALLET_CONNECTED',
  //       payload: true
  //     });
  //   }
  // }, []);

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