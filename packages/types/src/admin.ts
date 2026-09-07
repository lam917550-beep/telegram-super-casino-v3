export interface AdminUser {
  id: string;
  userId: string;
  role: 'admin' | 'moderator';
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditLog {
  id: string;
  adminId: string;
  action: string;
  targetType: 'user' | 'game' | 'pet' | 'item' | 'mission' | 'event';
  targetId: string;
  changes: Record<string, any>;
  reason?: string;
  createdAt: Date;
}

export interface Analytics {
  date: Date;
  dau: number; // Daily Active Users
  wau: number; // Weekly Active Users
  mau: number; // Monthly Active Users
  newUsers: number;
  totalBet: number;
  totalPayout: number;
  gamePopularity: Record<string, number>;
  currencyMetrics: Record<string, any>;
}
