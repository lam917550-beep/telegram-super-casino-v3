export type GameCategory = 
  | 'dice' | 'coin' | 'wheel' | 'slots' | 'card' | 'number' 
  | 'multiplier' | 'memory' | 'reaction' | 'grid' | 'treasure' 
  | 'door' | 'pvp' | 'tournament' | 'race' | 'quick' 
  | 'puzzle' | 'collection' | 'challenge' | 'taixiu' | 'lucky';

export type GameDifficulty = 'easy' | 'normal' | 'hard' | 'extreme';

export type GameRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface GameDefinition {
  id: string;
  name: string;
  description: string;
  category: GameCategory;
  difficulty: GameDifficulty;
  enabled: boolean;
  minBet: number;
  maxBet: number;
  minBetGem?: number;
  maxBetGem?: number;
  payout: number; // Multiplier
  house_edge: number; // 0-1
  rtp: number; // Return to Player: 0-1
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameConfig {
  gameId: string;
  configuration: Record<string, any>;
  version: number;
}

export interface GameRound {
  id: string;
  userId: string;
  gameId: string;
  bet: number;
  betCurrency: 'coin' | 'gem';
  result: 'win' | 'loss' | 'draw';
  payout: number;
  multiplier: number;
  serverSeed?: string;
  clientSeed?: string;
  nonce?: number;
  metadata?: Record<string, any>;
  createdAt: Date;
}

export interface GameResult {
  id: string;
  roundId: string;
  userId: string;
  gameId: string;
  bet: number;
  payout: number;
  multiplier: number;
  result: 'win' | 'loss' | 'draw';
  details: Record<string, any>;
  createdAt: Date;
}

export interface GameHistory {
  roundId: string;
  gameId: string;
  gameName: string;
  bet: number;
  payout: number;
  result: 'win' | 'loss' | 'draw';
  timestamp: Date;
}

export interface GameStats {
  totalRounds: number;
  totalBet: number;
  totalPayout: number;
  totalWins: number;
  totalLosses: number;
  winRate: number;
  avgBet: number;
  avgPayout: number;
  biggestWin: number;
  biggestLoss: number;
}
