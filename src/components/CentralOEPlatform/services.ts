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

    return this.makeRequest<RiskData[]>(`/api/risks?${queryParams}`);
  }

  async getUserContext(userId: string): Promise<{ name: string; id: string }> {
    return this.makeRequest<{ name: string; id: string }>(
      `/api/users/${userId}/context`
    );
  }

  async sendNotification(
    itemId: string,
    userId: string
  ): Promise<{ success: boolean }> {
    return this.makeRequest<{ success: boolean }>(`/api/notifications`, {
      method: "POST",
      body: JSON.stringify({
        itemId,
        userId,
        type: "risk_reminder",
      }),
    });
  }

  async updateItemSelection(
    itemId: string,
    selected: boolean,
    userId: string
  ): Promise<{ success: boolean }> {
    return this.makeRequest<{ success: boolean }>(
      `/api/items/${itemId}/selection`,
      {
        method: "PUT",
        body: JSON.stringify({
          selected,
          userId,
        }),
      }
    );
  }

  async getRiskStatistics(viewMode: ViewMode): Promise<{
    totalItems: number;
    overdueItems: number;
    completedItems: number;
    averageScore: number;
  }> {
    return this.makeRequest<{
      totalItems: number;
      overdueItems: number;
      completedItems: number;
      averageScore: number;
    }>(`/api/statistics?viewMode=${viewMode}`);
  }
}

// Export singleton instance
export const centralOEService = new CentralOEService();

// Mock data for development/testing
export const mockRiskData: RiskData[] = [
  {
    id: "shepherd",
    name: "Shepherd risks",
    percentage: 40,
    score: 88,
    items: [
      {
        id: "1",
        title: "Andes Tagging for DMA in-scope datasets identified via PDC",
        owner: "Kota",
        assignee: "sssram",
        dueIn: 15,
        link: "https://example.com/andes-tagging",
        status: "active",
      },
      {
        id: "2",
        title: "TransitiveAuth Onboarding for non-Java Initiators",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/transitive-auth",
        status: "active",
      },
      {
        id: "3",
        title: "Perimeter Security: Security Group Exposure Violates Policy",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/perimeter-security",
        status: "active",
      },
    ],
  },
  {
    id: "pe",
    name: "PE",
    percentage: 35,
    score: 65,
    items: [
      {
        id: "4",
        title: "Aquila Maestro Datapipeline Dev",
        owner: "Kota",
        assignee: "sssram",
        dueIn: 15,
        link: "https://example.com/aquila-maestro",
        status: "active",
      },
      {
        id: "5",
        title: "TransitiveAuth Onboarding for non-Java Initiators",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/transitive-auth-pe",
        status: "active",
      },
      {
        id: "6",
        title: "Perimeter Security: Security Group Exposure Violates Policy",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/perimeter-security-pe",
        status: "active",
      },
    ],
  },
  {
    id: "sas",
    name: "SAS",
    percentage: 25,
    score: 45,
    items: [
      {
        id: "7",
        title: "EDXClient/rsirasal:Beta",
        owner: "Kota",
        assignee: "sssram",
        dueIn: 15,
        link: "https://example.com/edxclient",
        status: "active",
      },
      {
        id: "8",
        title: "TransitiveAuth Onboarding for non-Java Initiators",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/transitive-auth-sas",
        status: "active",
      },
      {
        id: "9",
        title: "Perimeter Security: Security Group Exposure Violates Policy",
        owner: "Raymonm",
        assignee: "psmanish",
        dueIn: 26,
        link: "https://example.com/perimeter-security-sas",
        status: "active",
      },
    ],
  },
];
