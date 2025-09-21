'use client';

import { useState } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { ProfileHeader } from '../components/ProfileHeader';
import { TipConfigForm } from '../components/TipConfigForm';
import { TransactionHistory } from '../components/TransactionHistory';
import { EngagementMetric } from '../components/EngagementMetric';
import { PrimaryButton } from '../components/PrimaryButton';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  const { context } = useMiniKit();
  const [activeTab, setActiveTab] = useState<'home' | 'config' | 'history'>('home');
  const [isConfigured, setIsConfigured] = useState(false);

  const handleConfigSave = () => {
    setIsConfigured(true);
    setActiveTab('home');
  };

  if (!context?.user && activeTab === 'home') {
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
          <ProfileHeader user={context?.user} />
          
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
