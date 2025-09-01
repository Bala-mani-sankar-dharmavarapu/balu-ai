import type {
  SourceTableData,
  Application,
  TableInfo,
  TargetSystem,
} from "./types";

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
  static async getSourceTableData(): Promise<ApiResponse<SourceTableData[]>> {
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

  static async downloadReport(): Promise<ApiResponse<string>> {
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

  // New methods for KaleReview dashboard
  static async getApplications(): Promise<ApiResponse<Application[]>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockApplications: Application[] = [
      {
        id: "app-001",
        name: "Customer Management System",
        description: "Enterprise customer relationship management platform",
      },
      {
        id: "app-002",
        name: "Inventory Control System",
        description: "Real-time inventory tracking and management",
      },
      {
        id: "app-003",
        name: "Order Processing Engine",
        description: "Automated order fulfillment and processing",
      },
      {
        id: "app-004",
        name: "Payment Gateway Service",
        description: "Secure payment processing and transaction management",
      },
      {
        id: "app-005",
        name: "User Authentication Service",
        description: "Centralized user identity and access management",
      },
      {
        id: "app-006",
        name: "Data Analytics Platform",
        description: "Business intelligence and data visualization tools",
      },
      {
        id: "app-007",
        name: "Reporting Dashboard",
        description: "Interactive reports and performance metrics",
      },
      {
        id: "app-008",
        name: "Notification Service",
        description: "Multi-channel notification delivery system",
      },
      {
        id: "app-009",
        name: "File Storage Service",
        description: "Cloud-based document and media storage",
      },
      {
        id: "app-010",
        name: "Workflow Engine",
        description: "Business process automation and workflow management",
      },
      {
        id: "app-011",
        name: "API Gateway",
        description: "Centralized API management and routing",
      },
      {
        id: "app-012",
        name: "Logging Service",
        description: "Centralized application logging and monitoring",
      },
      {
        id: "app-013",
        name: "Configuration Manager",
        description: "Dynamic application configuration management",
      },
      {
        id: "app-014",
        name: "Cache Service",
        description: "High-performance data caching layer",
      },
      {
        id: "app-015",
        name: "Message Queue Service",
        description: "Asynchronous message processing and queuing",
      },
      {
        id: "app-016",
        name: "Search Engine",
        description: "Full-text search and indexing service",
      },
      {
        id: "app-017",
        name: "Email Service",
        description: "Transactional email delivery and management",
      },
      {
        id: "app-018",
        name: "Scheduling Service",
        description: "Task scheduling and cron job management",
      },
    ];

    return {
      data: mockApplications,
      success: true,
      message: "Applications retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }

  static async getTableInfo(): Promise<ApiResponse<TableInfo[]>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Mock table info based on the design
    const mockTableInfo: TableInfo[] = [
      {
        tableName: "customer_transactions",
        usageStatus: "Usage found",
      },
      {
        tableName: "user_profiles",
        usageStatus: "Usage not found",
      },
      {
        tableName: "order_details",
        usageStatus: "Valid",
      },
      {
        tableName: "product_catalog",
        usageStatus: "Usage found",
      },
      {
        tableName: "payment_records",
        usageStatus: "Usage not found",
      },
      {
        tableName: "inventory_status",
        usageStatus: "Valid",
      },
      {
        tableName: "shipping_info",
        usageStatus: "Usage found",
      },
      {
        tableName: "customer_feedback",
        usageStatus: "Usage not found",
      },
    ];

    return {
      data: mockTableInfo,
      success: true,
      message: "Table info retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }

  static async getTargetSystems(): Promise<ApiResponse<TargetSystem[]>> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 700));

    const mockTargetSystems: TargetSystem[] = [
      {
        id: "target-001",
        name: "Production Database Cluster",
        description: "Primary production database infrastructure",
      },
      {
        id: "target-002",
        name: "Development Environment",
        description: "Development and testing environment",
      },
      {
        id: "target-003",
        name: "Staging Server",
        description: "Pre-production staging environment",
      },
      {
        id: "target-004",
        name: "Data Warehouse",
        description: "Centralized data storage and analytics",
      },
      {
        id: "target-005",
        name: "Load Balancer",
        description: "Traffic distribution and load management",
      },
      {
        id: "target-006",
        name: "Cache Server",
        description: "High-performance caching layer",
      },
      {
        id: "target-007",
        name: "Message Broker",
        description: "Asynchronous message processing system",
      },
      {
        id: "target-008",
        name: "File Storage Server",
        description: "Centralized file storage and management",
      },
      {
        id: "target-009",
        name: "Monitoring Server",
        description: "System monitoring and alerting",
      },
      {
        id: "target-010",
        name: "Backup Server",
        description: "Data backup and recovery system",
      },
    ];

    return {
      data: mockTargetSystems,
      success: true,
      message: "Target systems retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }

  static async getOverallStatus(): Promise<
    ApiResponse<{ completed: number; total: number }>
  > {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      data: {
        completed: 36,
        total: 57,
      },
      success: true,
      message: "Overall status retrieved successfully",
      timestamp: new Date().toISOString(),
    };
  }
}
