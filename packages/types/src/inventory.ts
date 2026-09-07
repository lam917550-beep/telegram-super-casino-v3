export interface InventoryItem {
  id: string;
  userId: string;
  shopItemId: string;
  quantity: number;
  equipped: boolean;
  favorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface InventoryFilter {
  category?: string;
  rarity?: string;
  equipped?: boolean;
  favorite?: boolean;
  search?: string;
}

export interface InventorySort {
  field: 'createdAt' | 'name' | 'rarity';
  order: 'asc' | 'desc';
}
