export type PetRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'divine' | 'secret' | 'ancient';

export type PetType = 'creature' | 'beast' | 'spirit' | 'dragon' | 'magical';

export interface PetDefinition {
  id: string;
  name: string;
  description: string;
  type: PetType;
  rarity: PetRarity;
  emoji: string;
  image: string;
  rarity_color: string;
  price: number;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spd: number;
  };
  sellPrice?: number;
  evolutionId?: string;
  evolutionLevel?: number;
  xpPerFeed: number;
  maxEnergy: number;
  baseMood: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPet {
  id: string;
  userId: string;
  petId: string;
  level: number;
  xp: number;
  mood: number;
  energy: number;
  bonding: number;
  nickname?: string;
  equipped: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PetXP {
  id: string;
  userPetId: string;
  userId: string;
  source: 'feed' | 'play' | 'quest' | 'achievement' | 'event';
  amount: number;
  timestamp: Date;
}

export interface PetStats {
  level: number;
  xp: number;
  mood: number;
  energy: number;
  bonding: number;
  totalXp: number;
}
