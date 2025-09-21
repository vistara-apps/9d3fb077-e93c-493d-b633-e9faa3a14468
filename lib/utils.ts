import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSolAmount(amount: number): string {
  return amount.toFixed(4);
}

export function formatUsdAmount(solAmount: number, solPrice: number): string {
  return (solAmount * solPrice).toFixed(2);
}

export function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function truncateAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export function calculateTipAmount(
  baseTipAmount: number,
  engagementType: 'like' | 'recast',
  likeWeight: number,
  recastWeight: number
): number {
  const weight = engagementType === 'like' ? likeWeight : recastWeight;
  return (baseTipAmount * weight) / 100;
}

export function validateSolanaAddress(address: string): boolean {
  // Basic Solana address validation (44 characters, base58)
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{44}$/;
  return base58Regex.test(address);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
