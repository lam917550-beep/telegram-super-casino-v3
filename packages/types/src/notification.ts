export type NotificationType = 'daily_reward' | 'streak' | 'mission_complete' | 'achievement_unlock' | 'pet_unlock' | 'event_start' | 'event_end' | 'season_start' | 'system' | 'promotion';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  icon?: string;
  actionUrl?: string;
  read: boolean;
  createdAt: Date;
  expiresAt?: Date;
}
