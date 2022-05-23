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
export const CHAIN_ID = 56;
export const CHAIN_NAME = 'Binance Smart Chain';
export const RPC_URLS = ['https://bsc-dataseed1.binance.org/'];
export const BLOCK_EXPLORER_URLS = ['https://bscscan.com'];
export const NATIVE_CURRENCY_NAME = 'BNB';
export const NATIVE_CURRENCY_SYMBOL = 'BNB';
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

export const TOKEN_CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isExcluded", "type": "bool" }], "name": "ExcludeFromFees", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "newValue", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "oldValue", "type": "uint256" }], "name": "GasForProcessingUpdated", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "value", "type": "bool" }], "name": "SetAutomatedMarketMakerPair", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAddress", "type": "address" }, { "indexed": true, "internalType": "address", "name": "oldAddress", "type": "address" }], "name": "UpdateUniswapV2Router", "type": "event"
  },
  {
    "inputs": [], "name": "GamingRewardBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "GamingRewardSellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automatedMarketMakerPairs", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "buybackWallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "buybackWalletBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "buybackWalletSellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "excluded", "type": "bool" }], "name": "excludeFromFees", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [], "name": "gamingRewardWallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFees", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "liquidityBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "liquiditySellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "marketingBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "marketingSellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "marketingWallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "maxBuyTransactionAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "maxSellTransactionAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "bool", "name": "value", "type": "bool" }], "name": "setAutomatedMarketMakerPair", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_maxBuyTxAmount", "type": "uint256" }], "name": "setMaxBuyTransaction", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_maxSellTxAmount", "type": "uint256" }], "name": "setMaxSellTransaction", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_newAmount", "type": "uint256" }], "name": "setSwapTokensAtAmouunt", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "swapTokensAtAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "totalBuyFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "totalSellFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "newAddress", "type": "address" }], "name": "updateUniswapV2Router", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  },
  {
    "stateMutability": "payable", "type": "receive"
  }
];
export const TOKEN_CONTRACT_ADDRESS = '0xe705c3f34bbf38e1e298b65a7668fd5d9cdc0816';
export const SCAN_API_KEY = 'MQPQP1JFJXGA72RYM5SRSR45YBDBZ7ADXX';  //  For env BSC
// export const SCAN_API_KEY = 'C16EIZX6E95YXUNUM7B156R3GE2BIE3RCP'; //  For env Mumbai

export const TOKEN_AMOUNT = 1000000;