export type LeaderboardType = 'coin' | 'level' | 'xp' | 'streak' | 'games_played' | 'wins' | 'biggest_win' | 'pets' | 'pet_rarity' | 'achievements' | 'missions' | 'tournament' | 'guild';

export type LeaderboardTimeframe = 'daily' | 'weekly' | 'monthly' | 'season' | 'all_time';

export interface LeaderboardEntry {
  id: string;
  userId: string;
  username: string;
  rank: number;
  score: number;
  avatar?: string;
  previousRank?: number;
}

export interface Leaderboard {
  id: string;
  type: LeaderboardType;
  timeframe: LeaderboardTimeframe;
  entries: LeaderboardEntry[];
  updatedAt: Date;
}

export interface PlayerRank {
  rank: number;
  score: number;
  percentile: number;
}
