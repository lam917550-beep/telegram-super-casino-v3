export type ShopCategory = 'pet' | 'cosmetic' | 'ticket' | 'energy' | 'title' | 'badge' | 'effect' | 'frame' | 'theme' | 'skin';

export type ShopType = 'daily' | 'weekly' | 'season' | 'event' | 'permanent';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  category: ShopCategory;
  price: number;
  priceCurrency: 'coin' | 'gem';
  discount?: number;
  image?: string;
  rarity?: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopListing {
  id: string;
  shopItemId: string;
  shopType: ShopType;
  price: number;
  priceCurrency: 'coin' | 'gem';
  discount?: number;
  stock?: number;
  sold: number;
  startDate: Date;
  endDate?: Date;
  enabled: boolean;
  createdAt: Date;
}

export interface Purchase {
  id: string;
  userId: string;
  shopListingId: string;
  shopItemId: string;
  price: number;
  currency: 'coin' | 'gem';
  quantity: number;
  transactionId: string;
  createdAt: Date;
}
