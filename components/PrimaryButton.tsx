'use client';

import { clsx } from 'clsx';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'active' | 'inactive';
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  variant = 'active',
  disabled = false,
  type = 'button',
  className,
}: PrimaryButtonProps) {
  const baseStyles = 'font-semibold py-3 px-6 rounded-full transition-all duration-200 ease-in-out';
  
  const variantStyles = {
    active: 'bg-accent text-black hover:bg-opacity-90 hover:scale-105',
    inactive: 'bg-gray-600 text-text-secondary cursor-not-allowed',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || variant === 'inactive'}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}
