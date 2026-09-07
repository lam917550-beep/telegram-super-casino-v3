export interface User {
  id: string;
  telegramId: number;
  username: string;
  displayName: string;
  gameUsername: string;
  level: number;
  xp: number;
  totalXp: number;
  role: 'user' | 'admin' | 'moderator';
  avatar?: string;
  bio?: string;
  currentStreak: number;
  bestStreak: number;
  totalGamesPlayed: number;
  totalWins: number;
  biggestWin: number;
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
  deletedAt?: Date;
}

export interface UserSession {
  id: string;
  userId: string;
  jwtToken: string;
  refreshToken?: string;
  expiresAt: Date;
  createdAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

export interface UserSettings {
  id: string;
  userId: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  hapticEnabled: boolean;
  notificationsEnabled: boolean;
  reducedMotion: boolean;
  theme: 'dark' | 'light' | 'auto';
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  user: User;
  stats: {
    level: number;
    xp: number;
    streak: number;
    gamesPlayed: number;
    wins: number;
    winRate: number;
  };
  inventory: {
    petCount: number;
    cosmetics: number;
    achievements: number;
  };
}
