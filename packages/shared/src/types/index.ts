// ============================================================================
// SHARED TYPES - ALL APPLICATIONS
// ============================================================================

// USER TYPES
export interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
}

export interface User {
  id: string;
  telegramId: number;
  username: string;
  firstName: string;
  lastName: string | null;
  gameUsername: string;
  avatar: string | null;
  level: number;
  xp: number;
  streak: number;
  bestStreak: number;
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
  isActive: boolean;
  isBanned: boolean;
}

export interface UserSettings {
  userId: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  hapticEnabled: boolean;
  sfxVolume: number; // 0-100
  musicVolume: number; // 0-100
  theme: 'dark' | 'neon' | 'galaxy' | 'cyber';
  language: string;
}

// WALLET & ECONOMY
export interface Wallet {
  id: string;
  userId: string;
  coin: bigint;
  gem: bigint;
  ticket: bigint;
  energy: bigint;
  updatedAt: Date;
}

export type TransactionType =
  | 'BET'
  | 'WIN'
  | 'REWARD'
  | 'DAILY_LOGIN'
  | 'MISSION_COMPLETE'
  | 'ACHIEVEMENT_COMPLETE'
  | 'PET_PURCHASE'
  | 'PET_SELL'
  | 'SHOP_PURCHASE'
  | 'ADMIN_ADJUST'
  | 'STREAK_BONUS'
  | 'EVENT_REWARD'
  | 'SEASON_REWARD';

export interface WalletTransaction {
  id: string;
  walletId: string;
  userId: string;
  type: TransactionType;
  currency: 'COIN' | 'GEM' | 'TICKET' | 'ENERGY';
  amount: bigint;
  balanceBefore: bigint;
  balanceAfter: bigint;
  referenceType?: string;
  referenceId?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export interface Ledger {
  id: string;
  userId: string;
  transactionId: string;
  action: string;
  details: Record<string, unknown>;
  createdAt: Date;
}

// GAMES
export type GameType =
  | 'DICE'
  | 'COIN'
  | 'WHEEL'
  | 'SLOT'
  | 'CARD'
  | 'NUMBER'
  | 'MULTIPLIER'
  | 'MEMORY'
  | 'REACTION'
  | 'GRID'
  | 'TREASURE'
  | 'DOOR'
  | 'PVP'
  | 'TOURNAMENT'
  | 'QUICK';

export interface GameDefinition {
  id: string;
  name: string;
  description: string;
  type: GameType;
  category: string;
  minBet: bigint;
  maxBet: bigint;
  houseEdge: number; // 0.0-1.0
  payoutMultiplier: number;
  thumbnail: string;
  isActive: boolean;
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameRound {
  id: string;
  gameId: string;
  userId: string;
  roundId: string;
  bet: bigint;
  outcome: 'WIN' | 'LOSE';
  payout: bigint;
  profit: bigint;
  resultData: Record<string, unknown>;
  createdAt: Date;
}

// PETS
export type PetRarity = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' | 'DIVINE' | 'SECRET' | 'ANCIENT';

export interface PetDefinition {
  id: string;
  name: string;
  rarity: PetRarity;
  price: bigint;
  sellPrice: bigint;
  description: string;
  image: string;
  animation: string | null;
  passiveEffect?: string;
  metadata: Record<string, unknown>;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPet {
  id: string;
  userId: string;
  petDefinitionId: string;
  level: number;
  xp: number;
  mood: number; // 0-100
  energy: number; // 0-100
  isFavorite: boolean;
  isEquipped: boolean;
  customName?: string;
  bonusPower: number;
  createdAt: Date;
  updatedAt: Date;
}

// INVENTORY & SHOP
export interface InventoryItem {
  id: string;
  userId: string;
  itemId: string;
  quantity: number;
  isEquipped: boolean;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ItemType =
  | 'PET'
  | 'COSMETIC'
  | 'FRAME'
  | 'TITLE'
  | 'TICKET'
  | 'ENERGY'
  | 'EFFECT'
  | 'BACKGROUND'
  | 'SKIN';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  type: ItemType;
  price: bigint;
  currency: 'COIN' | 'GEM';
  icon: string;
  rarity: PetRarity | 'COMMON';
  isActive: boolean;
  stock?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

// PROGRESSION
export interface DailyLogin {
  id: string;
  userId: string;
  day: number;
  claimed: boolean;
  claimedAt?: Date;
  reward: bigint;
  month: number;
  year: number;
  createdAt: Date;
}

export interface Streak {
  id: string;
  userId: string;
  type: 'LOGIN' | 'MISSION' | 'GAME' | 'PET_CARE';
  current: number;
  best: number;
  lastUpdatedAt: Date;
}

export interface Mission {
  id: string;
  name: string;
  description: string;
  type: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'SEASONAL' | 'EVENT';
  requirement: number;
  reward: bigint;
  rewardType: 'COIN' | 'GEM' | 'XP';
  icon: string;
  isActive: boolean;
  startAt: Date;
  endAt: Date;
  metadata: Record<string, unknown>;
}

export interface UserMission {
  id: string;
  userId: string;
  missionId: string;
  progress: number;
  completed: boolean;
  completedAt?: Date;
  claimed: boolean;
  claimedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  reward: bigint;
  category: string;
  isSecret: boolean;
  metadata: Record<string, unknown>;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: Date;
  claimed: boolean;
  claimedAt?: Date;
}

// LEADERBOARDS
export interface LeaderboardEntry {
  userId: string;
  username: string;
  rank: number;
  score: bigint;
  updatedAt: Date;
}

export type LeaderboardType = 'COINS' | 'LEVEL' | 'XP' | 'STREAK' | 'GAMES' | 'WINS' | 'BIGGEST_WIN' | 'PETS' | 'ACHIEVEMENTS';

// EVENTS & SEASONS
export interface GameEvent {
  id: string;
  name: string;
  description: string;
  type: 'WEEKEND' | 'MONTHLY' | 'SEASONAL' | 'HOLIDAY' | 'COLLECTION' | 'TOURNAMENT';
  icon: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  reward: bigint;
  rewardType: 'COIN' | 'GEM' | 'XP';
  rules: Record<string, unknown>;
  metadata: Record<string, unknown>;
}

export interface Season {
  id: string;
  name: string;
  number: number;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  reward: bigint;
  cosmetics: string[]; // cosmetic IDs
  pets: string[]; // pet IDs exclusive to season
}

// API RESPONSES
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    requestId: string;
  };
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// AUTH
export interface TelegramInitData {
  user: TelegramUser;
  auth_date: number;
  hash: string;
  start_param?: string;
}

export interface AuthPayload {
  userId: string;
  telegramId: number;
  username: string;
  iat: number;
  exp: number;
}

// ERROR
export class CasinoError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 400,
    public metadata?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'CasinoError';
  }
}
