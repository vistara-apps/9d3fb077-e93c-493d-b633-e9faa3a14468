# SolTippy - Base MiniApp

SolTippy is a Farcaster MiniApp that automatically tips creators on Solana for engagements like likes and recasts on their posts.

## Features

- **Automated Engagement Tipping**: Automatically send SOL tips when you like or recast posts
- **Configurable Weights**: Customize how tips are distributed between likes and recasts
- **Transaction History**: Track all your tipping activity
- **Low-Cost Transactions**: Leverage Solana's low fees for micro-tipping
- **Social Integration**: Built for Farcaster with Base MiniKit

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OnchainKit API key from Coinbase

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soltippy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Configuration

1. Open the app and navigate to the "Config" tab
2. Set your default tip amount (minimum 0.001 SOL)
3. Adjust the distribution weights between likes and recasts
4. Enable auto-tipping
5. Save your configuration

### Tipping

Once configured, SolTippy will automatically:
- Monitor your Farcaster activity
- Detect when you like or recast posts
- Send tips to creators based on your settings
- Record transactions in your history

### Dashboard

The dashboard shows:
- Total tips sent for likes and recasts
- Recent transaction history
- Configuration summary
- Quick action buttons

## Technical Architecture

### Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Blockchain**: Solana for low-cost transactions
- **Social**: Farcaster integration via Base MiniKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

### Key Components

- `ProfileHeader`: User profile display
- `TipConfigForm`: Configuration interface
- `TransactionHistory`: Transaction tracking
- `EngagementMetric`: Analytics display
- `HeroSection`: Onboarding experience

### Data Model

```typescript
interface User {
  farcasterId: string;
  walletAddress: string;
  tipConfig: TipConfig;
}

interface TipTransaction {
  transactionId: string;
  senderFarcasterId: string;
  recipientFarcasterId: string;
  amount: number;
  currency: string;
  timestamp: string;
  engagementType: 'like' | 'recast';
  farcasterPostId: string;
}
```

## Development

### Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   ├── providers.tsx   # Context providers
│   └── globals.css     # Global styles
├── components/         # React components
├── lib/               # Utilities and types
└── public/            # Static assets
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The app is designed to be deployed as a Base MiniApp within Farcaster clients.

### Environment Variables

Required:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key

Optional:
- `NEXT_PUBLIC_SOLANA_RPC_URL` - Custom Solana RPC endpoint
- `NEXT_PUBLIC_FARCASTER_HUB_URL` - Custom Farcaster Hub URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact the development team.
