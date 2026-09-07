export const CURRENCY_SYMBOLS: Record<string, string> = {
  coin: '💰',
  gem: '💎',
  ticket: '🎫',
  energy: '⚡',
  token: '🪙',
  shard: '✨',
};

export const CURRENCY_NAMES: Record<string, string> = {
  coin: 'Coins',
  gem: 'Gems',
  ticket: 'Tickets',
  energy: 'Energy',
  token: 'Tokens',
  shard: 'Shards',
};

export const MIN_BET = 1;
export const MAX_BET = 1000000;

export const LEVEL_UP_XP = 100;
export const MAX_LEVEL = 999;

export const STREAK_BONUS_MULTIPLIER = 1.1;
export const WIN_STREAK_BONUS = 1.15;

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const SESSION_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
export const JWT_EXPIRY = '7d';

export const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
export const RATE_LIMIT_MAX = 100;

export const LEADERBOARD_CACHE_TTL = 60 * 60; // 1 hour

export const DAILY_REWARD_MULTIPLIER = 1.1;
export const STREAK_REWARD_BONUS = 1.5;

export const PET_SELL_PRICE_RATIO = 0.7; // Sell price = buy price * 0.7

export const GAME_CATEGORIES = [
  'dice',
  'coin',
  'wheel',
  'slots',
  'card',
  'number',
  'multiplier',
  'memory',
  'reaction',
  'grid',
  'treasure',
  'door',
  'pvp',
  'tournament',
  'race',
  'quick',
  'puzzle',
  'collection',
  'challenge',
] as const;
