'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { mainnet } from 'viem/chains';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || ''}
      chain={mainnet as any}
    >
      {children}
    </OnchainKitProvider>
  );
}
