export type TableStatus = "success" | "wfr" | "wfd";

export interface SourceTableData {
  id: string;
  name: string;
  statuses: Record<string, TableStatus>;
}

export interface KaleReviewDashboardProps {
  // Add any props if needed in the future
}

// New types for the KaleReview dashboard
export interface Application {
  id: string;
  name: string;
  description?: string;
}

export interface TableInfo {
  tableName: string;
  usageStatus: "Usage found" | "Usage not found" | "Valid";
}

export interface TargetSystem {
  id: string;
  name: string;
  description?: string;
}

export interface KaleReviewData {
  applications: Application[];
  selectedApplication: Application | null;
  tableInfo: TableInfo[];
  targetSystems: TargetSystem[];
  overallStatus: {
    completed: number;
    total: number;
  };
}
