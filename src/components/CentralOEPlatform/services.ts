import type { RiskData, ViewMode } from "./types";
import type { ApiResponse, RiskDataRequest } from "./serviceTypes";

// API base URL - in production this would come from environment variables
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://api.central-oe.com";

class CentralOEService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        // Add authentication headers here
        // "Authorization": `Bearer ${getAuthToken()}`,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw new Error(
        `Failed to fetch data: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  async getRiskData(request: RiskDataRequest): Promise<RiskData[]> {
    const queryParams = new URLSearchParams({
      viewMode: request.viewMode,
      ...(request.userId && { userId: request.userId }),
      ...(request.filters && { filters: JSON.stringify(request.filters) }),
    });

    const response = await this.makeRequest<RiskData[]>(
      `/api/risks?${queryParams}`
    );
    return response.data;
  }

  async getUserContext(userId: string): Promise<{ name: string; id: string }> {
    const response = await this.makeRequest<{ name: string; id: string }>(
      `/api/users/${userId}/context`
    );
    return response.data;
  }

  async sendNotification(
    itemId: string,
    userId: string
  ): Promise<{ success: boolean }> {
    const response = await this.makeRequest<{ success: boolean }>(
      `/api/notifications`,
      {
        method: "POST",
        body: JSON.stringify({
          itemId,
          userId,
          type: "risk_reminder",
        }),
      }
    );
    return response.data;
  }

  async updateItemSelection(
    itemId: string,
    selected: boolean,
    userId: string
  ): Promise<{ success: boolean }> {
    const response = await this.makeRequest<{ success: boolean }>(
      `/api/items/${itemId}/selection`,
      {
        method: "PUT",
        body: JSON.stringify({
          selected,
          userId,
        }),
      }
    );
    return response.data;
  }

  async getRiskStatistics(viewMode: ViewMode): Promise<{
    totalItems: number;
    overdueItems: number;
    completedItems: number;
    averageScore: number;
  }> {
    const response = await this.makeRequest<{
      totalItems: number;
      overdueItems: number;
      completedItems: number;
      averageScore: number;
    }>(`/api/statistics?viewMode=${viewMode}`);
    return response.data;
  }
}

// Export singleton instance
export const centralOEService = new CentralOEService();

// Mock data for development/testing
export const mockRiskData: RiskData[] = [
  {
    id: "high-risk",
    name: "High Priority Risks",
    percentage: 40,
    score: 88,
    items: [
      {
        id: "1",
        title: "Data Classification for Customer Datasets",
        owner: "Risk Manager",
        assignee: "Data Analyst",
        dueIn: 15,
        link: "https://example.com/data-classification",
        status: "active",
      },
      {
        id: "2",
        title: "Authentication System for External Users",
        owner: "Security Lead",
        assignee: "DevOps Engineer",
        dueIn: 26,
        link: "https://example.com/auth-system",
        status: "active",
      },
      {
        id: "3",
        title: "Network Security: Firewall Configuration Review",
        owner: "Security Lead",
        assignee: "Network Admin",
        dueIn: 26,
        link: "https://example.com/network-security",
        status: "active",
      },
    ],
  },
  {
    id: "medium-risk",
    name: "Medium Priority Risks",
    percentage: 35,
    score: 65,
    items: [
      {
        id: "4",
        title: "Data Pipeline Development Standards",
        owner: "Data Engineer",
        assignee: "DevOps Engineer",
        dueIn: 15,
        link: "https://example.com/data-pipeline",
        status: "active",
      },
      {
        id: "5",
        title: "API Security for Third-party Integrations",
        owner: "Security Lead",
        assignee: "Backend Developer",
        dueIn: 26,
        link: "https://example.com/api-security",
        status: "active",
      },
      {
        id: "6",
        title: "Access Control: User Permission Review",
        owner: "Security Lead",
        assignee: "System Admin",
        dueIn: 26,
        link: "https://example.com/access-control",
        status: "active",
      },
    ],
  },
  {
    id: "low-risk",
    name: "Low Priority Risks",
    percentage: 25,
    score: 45,
    items: [
      {
        id: "7",
        title: "Client Application Beta Testing",
        owner: "Product Manager",
        assignee: "QA Engineer",
        dueIn: 15,
        link: "https://example.com/client-testing",
        status: "active",
      },
      {
        id: "8",
        title: "Database Backup and Recovery Testing",
        owner: "DBA",
        assignee: "DevOps Engineer",
        dueIn: 26,
        link: "https://example.com/backup-testing",
        status: "active",
      },
      {
        id: "9",
        title: "Logging and Monitoring Setup",
        owner: "DevOps Lead",
        assignee: "SRE Engineer",
        dueIn: 26,
        link: "https://example.com/logging-monitoring",
        status: "active",
      },
    ],
  },
];
