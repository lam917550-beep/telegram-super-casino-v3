export type EventType = 'weekend' | 'seasonal' | 'monthly' | 'holiday' | 'tournament' | 'collection' | 'limited';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  image?: string;
  startDate: Date;
  endDate: Date;
  reward: number;
  rewardType: 'coin' | 'gem' | 'ticket' | 'pet' | 'cosmetic';
  rewardId?: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventParticipation {
  id: string;
  userId: string;
  eventId: string;
  progress: number;
  completed: boolean;
  rewardClaimed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
