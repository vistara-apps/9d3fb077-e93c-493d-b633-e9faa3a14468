import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolTippy - Tip creators on Farcaster',
  description: 'Tip creators on Farcaster with every like and retweet.',
  openGraph: {
    title: 'SolTippy',
    description: 'Tip creators on Farcaster with every like and retweet.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text-primary">
        <Providers>
          <main className="container mx-auto max-w-md px-4 py-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
