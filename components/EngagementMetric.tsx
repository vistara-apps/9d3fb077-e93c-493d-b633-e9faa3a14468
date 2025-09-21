'use client';

interface EngagementMetricProps {
  variant: 'likes' | 'recasts';
  count: number;
  amount: string;
  label: string;
}

export function EngagementMetric({ variant, count, amount, label }: EngagementMetricProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'likes':
        return {
          icon: '❤️',
          color: 'text-red-400',
          bg: 'bg-red-400/10',
        };
      case 'recasts':
        return {
          icon: '🔄',
          color: 'text-blue-400',
          bg: 'bg-blue-400/10',
        };
      default:
        return {
          icon: '📊',
          color: 'text-text-secondary',
          bg: 'bg-surface',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className="card">
      <div className="text-center space-y-3">
        <div className={`w-12 h-12 ${styles.bg} rounded-full flex items-center justify-center mx-auto`}>
          <span className="text-2xl">{styles.icon}</span>
        </div>
        
        <div>
          <div className={`text-2xl font-bold ${styles.color}`}>
            {count}
          </div>
          <div className="text-sm text-text-secondary">
            {label}
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-700">
          <div className="text-lg font-semibold text-accent">
            {amount}
          </div>
          <div className="text-xs text-text-secondary">
            Total Tipped
          </div>
        </div>
      </div>
    </div>
  );
}
