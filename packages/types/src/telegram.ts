export interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export interface TelegramInitData {
  user: TelegramUser;
  auth_date: number;
  hash: string;
  query_id?: string;
  chat_instance?: string;
  chat_type?: string;
  start_param?: string;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: TelegramInitData;
  version: string;
  platform: string;
  colorScheme: 'light' | 'dark';
  themeParams: Record<string, string>;
  isExpanded: boolean;
  headerColor: string;
  backgroundColor: string;
  bottomBarColor: string;
  isClosingConfirmationEnabled: boolean;
  BackButton: {
    isVisible: boolean;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    showProgress(leaveActive: boolean): void;
    hideProgress(): void;
    setParams(params: Record<string, string | boolean>): void;
  };
  HapticFeedback: {
    impactOccurred(style: 'light' | 'medium' | 'heavy'): void;
    notificationOccurred(type: 'error' | 'success' | 'warning'): void;
    selectionChanged(): void;
  };
  CloudStorage: {
    setItem(key: string, value: string, callback?: (err: Error | null) => void): void;
    getItem(key: string, callback: (err: Error | null, value: string | null) => void): void;
    getItems(keys: string[], callback: (err: Error | null, value: Record<string, string>) => void): void;
    removeItem(key: string, callback?: (err: Error | null) => void): void;
    getKeys(callback: (err: Error | null, keys: string[]) => void): void;
  };
  ready(): void;
  expand(): void;
  close(): void;
  openLink(url: string, options?: { try_instant_view?: boolean }): void;
  openTelegramLink(url: string): void;
  openInvoice(url: string, callback?: (status: string) => void): void;
  shareToChat(url: string, callback?: (success: boolean) => void): void;
  setHeaderColor(color: 'bg_color' | 'secondary_bg_color' | string): void;
  setBackgroundColor(color: string): void;
  setBottomBarColor(color: 'bg_color' | 'secondary_bg_color' | string): void;
  isVersionAtLeast(version: string): boolean;
  onViewportChanged(callback: (viewport: { isStateStable: boolean; height: number }) => void): void;
  offViewportChanged(callback: (viewport: { isStateStable: boolean; height: number }) => void): void;
}
