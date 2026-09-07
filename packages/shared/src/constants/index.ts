// ============================================================================
// SHARED CONSTANTS
// ============================================================================

// CURRENCY LIMITS
export const CURRENCY_LIMITS = {
  MAX_BET: 1_000_000n,
  MIN_BET: 1n,
  MAX_PAYOUT: 50_000_000n,
  MAX_DAILY_REWARD: 500_000n,
  MAX_WALLET: 999_999_999_999n,
} as const;

// GAME CONFIG
export const GAME_CONFIG = {
  DEFAULT_HOUSE_EDGE: 0.02,
  MIN_PAYOUT_MULTIPLIER: 0.1,
  MAX_PAYOUT_MULTIPLIER: 100,
  RISK_LIMIT_MULTIPLIER: 10, // max bet = balance / 10
} as const;

// PET SYSTEM
export const PET_CONFIG = {
  SELL_PRICE_RATIO: 0.7,
  MIN_RENAME_COOLDOWN_HOURS: 24,
  RENAME_COST: 10_000n,
  EVOLUTION_XP_REQUIREMENT: 10_000,
  MAX_ENERGY: 100,
  ENERGY_REGEN_PER_HOUR: 10,
} as const;

// PROGRESSION
export const PROGRESSION_CONFIG = {
  XP_PER_GAME: 10,
  XP_PER_MISSION: 50,
  XP_PER_ACHIEVEMENT: 100,
  LEVEL_UP_XP_FORMULA: (level: number) => level * 1000, // XP needed for next level
  MAX_LEVEL: 999,
} as const;

// DAILY LOGIN
export const DAILY_LOGIN_REWARDS = [
  1_000n,
  2_000n,
  3_000n,
  4_000n,
  5_000n,
  6_000n,
  7_000n,
  8_000n,
  9_000n,
  10_000n,
  15_000n,
  20_000n,
  25_000n,
  30_000n,
  40_000n,
  50_000n,
  60_000n,
  70_000n,
  80_000n,
  100_000n,
  120_000n,
  150_000n,
  200_000n,
  250_000n,
  300_000n,
  400_000n,
  500_000n,
  750_000n,
  1_000_000n,
  1_500_000n,
] as const;

// STREAK
export const STREAK_CONFIG = {
  STREAK_RESET_HOURS: 48,
  STREAK_BONUS_MULTIPLIER: 1.1,
} as const;

// RATE LIMITING
export const RATE_LIMITS = {
  AUTH: { points: 5, duration: 60 }, // 5 per minute
  GAME: { points: 30, duration: 60 }, // 30 per minute
  CLAIM: { points: 10, duration: 60 }, // 10 per minute
  PURCHASE: { points: 20, duration: 60 }, // 20 per minute
  PROFILE: { points: 50, duration: 60 }, // 50 per minute
  ADMIN: { points: 100, duration: 60 }, // 100 per minute
} as const;

// VALIDATION
export const VALIDATION = {
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
  USERNAME_PATTERN: /^[a-zA-Z0-9_-]+$/,
  GAME_ROUND_ID_LENGTH: 32,
  IDEMPOTENCY_KEY_LENGTH: 36,
} as const;

// SESSION
export const SESSION_CONFIG = {
  SESSION_DURATION_MS: 7 * 24 * 60 * 60 * 1000, // 7 days
  REFRESH_TOKEN_DURATION_MS: 30 * 24 * 60 * 60 * 1000, // 30 days
} as const;
