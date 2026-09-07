export type CosmeticType = 'frame' | 'banner' | 'card_skin' | 'dice_skin' | 'wheel_skin' | 'button_effect' | 'win_effect' | 'title' | 'badge' | 'theme' | 'name_style';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Cosmetic {
  id: string;
  name: string;
  description: string;
  type: CosmeticType;
  rarity: CosmeticRarity;
  image?: string;
  preview?: string;
  price: number;
  currency: 'coin' | 'gem';
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Title {
  id: string;
  name: string;
  description: string;
  color: string;
  icon?: string;
  rarity: CosmeticRarity;
  price: number;
  currency: 'coin' | 'gem';
  createdAt: Date;
  updatedAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  rarity: CosmeticRarity;
  condition: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
