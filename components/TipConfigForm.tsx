'use client';

import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';

interface TipConfig {
  defaultTipAmount: string;
  likeWeight: number;
  recastWeight: number;
  isEnabled: boolean;
}

interface TipConfigFormProps {
  onSave: () => void;
}

export function TipConfigForm({ onSave }: TipConfigFormProps) {
  const [config, setConfig] = useState<TipConfig>({
    defaultTipAmount: '0.001',
    likeWeight: 50,
    recastWeight: 50,
    isEnabled: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Saving config:', config);
      onSave();
    } catch (error) {
      console.error('Failed to save config:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWeightChange = (type: 'like' | 'recast', value: number) => {
    if (type === 'like') {
      setConfig(prev => ({
        ...prev,
        likeWeight: value,
        recastWeight: 100 - value,
      }));
    } else {
      setConfig(prev => ({
        ...prev,
        recastWeight: value,
        likeWeight: 100 - value,
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Configure Tipping
        </h2>
        <p className="text-text-secondary">
          Set up your automatic tipping preferences
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Enable/Disable Toggle */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary">Auto-Tipping</h3>
              <p className="text-sm text-text-secondary">
                Enable automatic tips on engagements
              </p>
            </div>
            <button
              type="button"
              onClick={() => setConfig(prev => ({ ...prev, isEnabled: !prev.isEnabled }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                config.isEnabled ? 'bg-accent' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  config.isEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Default Tip Amount */}
        <div className="card">
          <label className="block">
            <span className="text-sm font-medium text-text-primary mb-2 block">
              Default Tip Amount (SOL)
            </span>
            <input
              type="number"
              step="0.001"
              min="0.001"
              value={config.defaultTipAmount}
              onChange={(e) => setConfig(prev => ({ ...prev, defaultTipAmount: e.target.value }))}
              className="input-field w-full"
              placeholder="0.001"
            />
            <p className="text-xs text-text-secondary mt-1">
              Minimum: 0.001 SOL (~$0.02)
            </p>
          </label>
        </div>

        {/* Engagement Weights */}
        <div className="card">
          <h3 className="font-semibold text-text-primary mb-4">
            Engagement Distribution
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-primary">Likes</span>
                <span className="text-sm text-accent font-medium">{config.likeWeight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={config.likeWeight}
                onChange={(e) => handleWeightChange('like', parseInt(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-primary">Recasts</span>
                <span className="text-sm text-primary font-medium">{config.recastWeight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={config.recastWeight}
                onChange={(e) => handleWeightChange('recast', parseInt(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-background rounded-md">
            <p className="text-xs text-text-secondary">
              Tips will be distributed based on these percentages. 
              Like: {((parseFloat(config.defaultTipAmount) * config.likeWeight) / 100).toFixed(4)} SOL, 
              Recast: {((parseFloat(config.defaultTipAmount) * config.recastWeight) / 100).toFixed(4)} SOL
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <PrimaryButton
          type="submit"
          variant={isLoading ? "inactive" : "active"}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Saving...' : 'Save Configuration'}
        </PrimaryButton>
      </form>
    </div>
  );
}
