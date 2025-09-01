import type { SourceTableData } from "./types";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface SourceTableRequest {
  startDate?: string;
  endDate?: string;
  tableNames?: string[];
}

export class WBRJobMonitoringService {
  static async getSourceTableData(
    _request: SourceTableRequest
  ): Promise<ApiResponse<SourceTableData[]>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock data based on the image
    const mockData: SourceTableData[] = [
      {
        id: "table-001",
        name: "customer_data",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "success",
          "8/9/25": "success",
          "8/10/25": "success",
          "8/11/25": "success",
          "8/12/25": "wfr",
          "8/13/25": "wfr",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
      {
        id: "table-002",
        name: "order_records",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "success",
          "8/9/25": "success",
          "8/10/25": "success",
          "8/11/25": "success",
          "8/12/25": "wfr",
          "8/13/25": "wfr",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
      {
        id: "table-003",
        name: "product_inventory",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "success",
          "8/9/25": "success",
          "8/10/25": "success",
          "8/11/25": "success",
          "8/12/25": "wfr",
          "8/13/25": "wfr",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
      {
        id: "table-004",
        name: "payment_transactions",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "wfr",
          "8/9/25": "wfd",
          "8/10/25": "wfd",
          "8/11/25": "wfd",
          "8/12/25": "wfd",
          "8/13/25": "wfd",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
      {
        id: "table-005",
        name: "user_sessions",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "wfr",
          "8/9/25": "wfd",
          "8/10/25": "wfd",
          "8/11/25": "wfd",
          "8/12/25": "wfd",
          "8/13/25": "wfd",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
      {
        id: "table-006",
        name: "analytics_events",
        statuses: {
          "8/6/25": "success",
          "8/7/25": "success",
          "8/8/25": "wfr",
          "8/9/25": "wfd",
          "8/10/25": "wfd",
          "8/11/25": "wfd",
          "8/12/25": "wfd",
          "8/13/25": "wfd",
          "8/14/25": "wfd",
          "8/15/25": "wfd",
        },
      },
    ];

    return {
      data: mockData,
      success: true,
      message: "Data retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }

  static async downloadReport(
    _request: SourceTableRequest
  ): Promise<ApiResponse<string>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      data: "report-download-url",
      success: true,
      message: "Report generated successfully",
      timestamp: new Date().toISOString(),
    };
  }

  static async getStatusStatistics(): Promise<
    ApiResponse<Record<string, number>>
  > {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      data: {
        success: 18,
        wfr: 6,
        wfd: 36,
      },
      success: true,
      message: "Statistics retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }
}
