'use client';

import { PrimaryButton } from './PrimaryButton';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 px-4">
      {/* Hero Visual */}
      <div className="relative">
        <div className="w-80 h-48 bg-gradient-to-br from-surface to-background rounded-2xl border border-gray-700 flex flex-col items-center justify-center space-y-4 shadow-2xl">
          <h1 className="text-white text-xl font-bold">tip on retweets and likes</h1>
          
          {/* Central Circle with F logo */}
          <div className="relative">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
            
            {/* Floating icons around the circle */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-float">
              <span className="text-xs">💰</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs">❤️</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-xs">🔄</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
              <span className="text-xs">⚡</span>
            </div>
          </div>
          
          <PrimaryButton variant="active" className="!py-2 !px-6 !text-sm">
            tip now
          </PrimaryButton>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse-slow"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full opacity-40 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Text Content */}
      <div className="space-y-4 max-w-sm">
        <h2 className="text-3xl font-bold text-text-primary">
          SolTippy
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          Automatically tip creators on Farcaster with every like and recast. Support the creator economy effortlessly.
        </p>
      </div>

      {/* CTA Button */}
      <PrimaryButton
        onClick={onGetStarted}
        variant="active"
        className="!py-4 !px-8 !text-lg"
      >
        Get Started
      </PrimaryButton>

      {/* Features */}
      <div className="grid grid-cols-1 gap-4 max-w-sm text-sm text-text-secondary">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>Low-cost Solana transactions</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Automated engagement rewards</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Support your favorite creators</span>
        </div>
      </div>
    </div>
  );
}
