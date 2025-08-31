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

export class KaleReviewService {
  static async getSourceTableData(
    request: SourceTableRequest
  ): Promise<ApiResponse<SourceTableData[]>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock data based on the image
    const mockData: SourceTableData[] = [
      {
        id: "action-spot",
        name: "Action SPOT",
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
        id: "order-spot",
        name: "Order SPOT",
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
        id: "customer-spot",
        name: "Customer SPOT",
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
        id: "d-cb-details",
        name: "d_cb_details",
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
        id: "table-y",
        name: "Table Y",
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
        id: "table-z",
        name: "Table Z",
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
    request: SourceTableRequest
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
