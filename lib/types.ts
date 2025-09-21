// User types
export interface User {
  farcasterId: string;
  walletAddress: string;
  tipConfig: TipConfig;
}

export interface TipConfig {
  defaultTipAmount: number;
  likeWeight: number;
  recastWeight: number;
  isEnabled: boolean;
}

// Transaction types
export interface TipTransaction {
  transactionId: string;
  senderFarcasterId: string;
  recipientFarcasterId: string;
  amount: number;
  currency: string;
  timestamp: string;
  engagementType: 'like' | 'recast';
  farcasterPostId: string;
  status: 'pending' | 'completed' | 'failed';
}

// Configuration types
export interface Configuration {
  farcasterId: string;
  defaultTipAmount: number;
  likeWeight: number;
  recastWeight: number;
  isEnabled: boolean;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Farcaster types
export interface FarcasterUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl?: string;
  walletAddress?: string;
}

export interface FarcasterCast {
  hash: string;
  authorFid: number;
  text: string;
  timestamp: string;
  likes: number;
  recasts: number;
}

// Solana types
export interface SolanaTransaction {
  signature: string;
  from: string;
  to: string;
  amount: number;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'failed';
}
