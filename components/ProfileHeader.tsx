'use client';

interface User {
  displayName?: string;
  username?: string;
  pfpUrl?: string;
  fid?: number;
}

interface ProfileHeaderProps {
  user?: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  if (!user) {
    return (
      <div className="card">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-surface rounded-full animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-surface rounded w-24 animate-pulse"></div>
            <div className="h-3 bg-surface rounded w-16 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          {user.pfpUrl ? (
            <img
              src={user.pfpUrl}
              alt={user.displayName || 'User'}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-semibold">
              {(user.displayName || user.username || 'U')[0].toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            {user.displayName || user.username || 'Anonymous'}
          </h2>
          <p className="text-sm text-text-secondary">
            @{user.username || `fid:${user.fid}`}
          </p>
        </div>
      </div>
    </div>
  );
}
