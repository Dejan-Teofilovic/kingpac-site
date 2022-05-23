export const ROUTES = [
  {
    id: 1,
    name: 'Introduction',
    path: '#introduction'
  },
  {
    id: 2,
    name: 'About us',
    path: '#about-us'
  },
  {
    id: 3,
    name: 'FAQ',
    path: '#faq'
  },
  {
    id: 4,
    name: 'Community',
    path: '#community'
  }
];

// Chain infos
export const CHAIN_ID = 97;
export const CHAIN_NAME = 'BNB Smart Chain Testnet';
export const RPC_URLS = ['https://data-seed-prebsc-1-s1.binance.org:8545/'];
export const BLOCK_EXPLORER_URLS = ['https://testnet.bscscan.com/'];
export const NATIVE_CURRENCY_NAME = 'TBNB';
export const NATIVE_CURRENCY_SYMBOL = 'TBNB';
export const DECIMALS = 18;

export const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/;

export const ERROR = 'error';
export const SWITCH_ERROR_CODE = 4902;

//  Animations
export const VAR_FADE_IN_UP = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_DOWN = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_LEFT = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_RIGHT = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

//  Fonts
export const FONT_RIGHTEOUS = "'Righteous', cursive";
export const FONT_AMARANTH = "'Amaranth', sans-serif";

// Colors
export const COLOR_PRIMARY = '#eec51e';

//  Moralis
export const MORALIS_SERVER_URL = 'https://beim52fyzlek.usemoralis.com:2053/server';
export const MORALIS_APP_ID = 'zZXNShFa8zHpRKDgaOLBV3FBTMKkMtXPLuUyNgfa'; //  For env

export const WALLET_CONNECT_INFURA_ID = '8cf3cad623da43f9a84ab5ac94230cf6';