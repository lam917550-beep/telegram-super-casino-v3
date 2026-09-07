export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
  requestId?: string;
  timestamp: Date;
}

export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface HealthCheck {
  status: 'ok' | 'degraded' | 'down';
  timestamp: Date;
  version: string;
  database: 'ok' | 'error';
  redis: 'ok' | 'error' | 'disabled';
  uptime: number;
}
