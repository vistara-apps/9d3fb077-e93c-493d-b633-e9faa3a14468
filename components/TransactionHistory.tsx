'use client';

import { useState } from 'react';

interface Transaction {
  id: string;
  recipientUsername: string;
  amount: string;
  currency: string;
  engagementType: 'like' | 'recast';
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    recipientUsername: 'creator1',
    amount: '0.0005',
    currency: 'SOL',
    engagementType: 'like',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'completed',
  },
  {
    id: '2',
    recipientUsername: 'artist2',
    amount: '0.0005',
    currency: 'SOL',
    engagementType: 'recast',
    timestamp: '2024-01-15T09:15:00Z',
    status: 'completed',
  },
  {
    id: '3',
    recipientUsername: 'builder3',
    amount: '0.0005',
    currency: 'SOL',
    engagementType: 'like',
    timestamp: '2024-01-14T16:45:00Z',
    status: 'pending',
  },
];

export function TransactionHistory() {
  const [filter, setFilter] = useState<'all' | 'like' | 'recast'>('all');

  const filteredTransactions = mockTransactions.filter(tx => 
    filter === 'all' || tx.engagementType === filter
  );

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'pending': return 'text-accent';
      case 'failed': return 'text-red-400';
      default: return 'text-text-secondary';
    }
  };

  const getEngagementIcon = (type: string) => {
    return type === 'like' ? '❤️' : '🔄';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Transaction History
        </h2>
        <p className="text-text-secondary">
          Track your tipping activity
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-1 bg-surface rounded-lg p-1">
        {(['all', 'like', 'recast'] as const).map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
              filter === filterType
                ? 'bg-accent text-black'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-accent">
            {mockTransactions.length}
          </div>
          <div className="text-xs text-text-secondary">Total Tips</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-primary">
            {mockTransactions.reduce((sum, tx) => sum + parseFloat(tx.amount), 0).toFixed(4)}
          </div>
          <div className="text-xs text-text-secondary">SOL Sent</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-400">
            {mockTransactions.filter(tx => tx.status === 'completed').length}
          </div>
          <div className="text-xs text-text-secondary">Completed</div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-text-secondary">No transactions found</p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center">
                    <span className="text-lg">
                      {getEngagementIcon(transaction.engagementType)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">
                      @{transaction.recipientUsername}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {formatDate(transaction.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-text-primary">
                    {transaction.amount} {transaction.currency}
                  </div>
                  <div className={`text-sm capitalize ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
