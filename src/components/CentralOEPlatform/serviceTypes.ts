import type { ViewMode } from "./types";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface RiskDataRequest {
  viewMode: ViewMode;
  userId?: string;
  filters?: {
    category?: string[];
    status?: string[];
    dueDateRange?: {
      start: string;
      end: string;
    };
  };
}
