export const ROUTES = [
  {
    id: 1,
    name: 'Explore Dice',
    path: '/explore-dice'
  },
  {
    id: 2,
    name: 'FAQ',
    path: '/faq'
  }
];

// Chain infos
export const CHAIN_ID = 80001;
export const CHAIN_NAME = 'Mumbai Testnet';
export const RPC_URLS = ['https://rpc-mumbai.maticvigil.com'];
export const BLOCK_EXPLORER_URLS = ['https://polygonscan.com/'];
export const NATIVE_CURRENCY_NAME = 'MATIC';
export const NATIVE_CURRENCY_SYMBOL = 'MATIC';
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