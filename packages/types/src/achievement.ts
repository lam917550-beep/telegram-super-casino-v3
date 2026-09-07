export type AchievementRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: AchievementRarity;
  reward: number;
  rewardType: 'coin' | 'gem' | 'xp' | 'title';
  condition: Record<string, any>;
  category: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: Date;
  progress: number;
  createdAt: Date;
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  target: number;
  completed: boolean;
  unlockedAt?: Date;
}
