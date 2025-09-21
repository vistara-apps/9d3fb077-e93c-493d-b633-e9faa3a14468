// Solana configuration
export const SOLANA_NETWORK = 'mainnet-beta';
export const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';

// Tip configuration
export const MIN_TIP_AMOUNT = 0.001; // SOL
export const MAX_TIP_AMOUNT = 1.0; // SOL
export const DEFAULT_TIP_AMOUNT = 0.001; // SOL

// Fee configuration
export const PLATFORM_FEE_PERCENTAGE = 5; // 5%
export const SOLANA_TRANSACTION_FEE = 0.000005; // SOL

// Engagement weights
export const DEFAULT_LIKE_WEIGHT = 50;
export const DEFAULT_RECAST_WEIGHT = 50;

// API endpoints
export const FARCASTER_HUB_URL = process.env.NEXT_PUBLIC_FARCASTER_HUB_URL || 'https://hub.farcaster.xyz';

// UI constants
export const ANIMATION_DURATION = {
  FAST: 100,
  BASE: 200,
  SLOW: 300,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Please connect your wallet to continue',
  INSUFFICIENT_BALANCE: 'Insufficient balance for this transaction',
  TRANSACTION_FAILED: 'Transaction failed. Please try again.',
  INVALID_AMOUNT: 'Please enter a valid tip amount',
  NETWORK_ERROR: 'Network error. Please check your connection.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  CONFIG_SAVED: 'Configuration saved successfully',
  TIP_SENT: 'Tip sent successfully',
  WALLET_CONNECTED: 'Wallet connected successfully',
} as const;
