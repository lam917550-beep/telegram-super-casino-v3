export interface Wallet {
  id: string;
  userId: string;
  coin: number;
  gem: number;
  ticket: number;
  energy: number;
  token: number;
  shard: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  type: 'bet' | 'payout' | 'daily_reward' | 'mission_reward' | 'achievement_reward' | 'shop_purchase' | 'pet_purchase' | 'pet_sell' | 'event_reward' | 'refund' | 'admin_adjustment';
  currency: 'coin' | 'gem' | 'ticket' | 'energy' | 'token' | 'shard';
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  referenceType?: 'game_round' | 'mission' | 'achievement' | 'shop_item' | 'pet' | 'event';
  referenceId?: string;
  metadata?: Record<string, any>;
  idempotencyKey?: string;
  createdAt: Date;
}

export interface CurrencyConfig {
  name: string;
  symbol: string;
  color: string;
  emoji: string;
  description: string;
}
