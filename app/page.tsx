'use client';

import { useState } from 'react';
import { ProfileHeader } from '../components/ProfileHeader';
import { TipConfigForm } from '../components/TipConfigForm';
import { TransactionHistory } from '../components/TransactionHistory';
import { EngagementMetric } from '../components/EngagementMetric';
import { PrimaryButton } from '../components/PrimaryButton';
import HeroSection from '../components/HeroSection';

// Force dynamic rendering to avoid SSR issues with wagmi hooks
export const dynamic = 'force-dynamic';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'config' | 'history'>('home');
  const [isConfigured, setIsConfigured] = useState(false);

  // Mock user data for now - in a real Base Mini App, this would come from MiniKit context
  const mockUser = {
    displayName: 'Demo User',
    username: 'demouser',
    pfpUrl: undefined,
    fid: 12345
  };

  const handleConfigSave = () => {
    setIsConfigured(true);
    setActiveTab('home');
  };

  // For demo purposes, always show the main interface
  // In a real app, you'd check if user is authenticated
  if (activeTab === 'home' && !isConfigured) {
    return <HeroSection onGetStarted={() => setActiveTab('config')} />;
  }

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <nav className="flex justify-center space-x-1 bg-surface rounded-lg p-1">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'home'
              ? 'bg-accent text-black'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('config')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'config'
              ? 'bg-accent text-black'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Config
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'history'
              ? 'bg-accent text-black'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          History
        </button>
      </nav>

      {/* Content */}
      {activeTab === 'home' && (
        <div className="space-y-6">
          <ProfileHeader user={mockUser} />
          
          {!isConfigured ? (
            <div className="card text-center space-y-4">
              <h3 className="text-xl font-semibold">Welcome to SolTippy!</h3>
              <p className="text-text-secondary">
                Configure your tipping preferences to start automatically rewarding creators.
              </p>
              <PrimaryButton
                onClick={() => setActiveTab('config')}
                variant="active"
              >
                Set Up Tipping
              </PrimaryButton>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <EngagementMetric
                  variant="likes"
                  count={127}
                  amount="0.127 SOL"
                  label="Tips on Likes"
                />
                <EngagementMetric
                  variant="recasts"
                  count={89}
                  amount="0.089 SOL"
                  label="Tips on Recasts"
                />
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <PrimaryButton variant="active" className="w-full">
                    Enable Auto-Tipping
                  </PrimaryButton>
                  <button className="btn-secondary w-full">
                    View Recent Tips
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {activeTab === 'config' && (
        <TipConfigForm onSave={handleConfigSave} />
      )}

      {activeTab === 'history' && (
        <TransactionHistory />
      )}
    </div>
  );
}
