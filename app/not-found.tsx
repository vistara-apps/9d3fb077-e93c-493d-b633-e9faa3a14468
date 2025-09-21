'use client';

// Force dynamic rendering to avoid SSR issues with wagmi hooks
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
        <p className="text-text-secondary">Page not found</p>
      </div>
    </div>
  );
}
