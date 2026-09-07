export interface Season {
  id: string;
  name: string;
  description: string;
  number: number;
  image?: string;
  startDate: Date;
  endDate: Date;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SeasonReward {
  id: string;
  seasonId: string;
  rank: number;
  reward: string;
  rewardType: 'coin' | 'gem' | 'cosmetic' | 'pet';
  rewardValue: number;
}

export interface SeasonLeaderboard {
  seasonId: string;
  entries: Array<{
    userId: string;
    username: string;
    rank: number;
    score: number;
    reward?: SeasonReward;
  }>;
}
