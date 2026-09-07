export type MissionType = 'daily' | 'weekly' | 'monthly' | 'seasonal' | 'event' | 'game' | 'pet' | 'social';

export type MissionStatus = 'active' | 'completed' | 'expired' | 'claimed';

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: MissionType;
  category: string;
  target: number;
  reward: number;
  rewardCurrency: 'coin' | 'gem' | 'xp' | 'ticket';
  icon?: string;
  enabled: boolean;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserMission {
  id: string;
  userId: string;
  missionId: string;
  progress: number;
  status: MissionStatus;
  claimedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MissionReward {
  currency: string;
  amount: number;
}
