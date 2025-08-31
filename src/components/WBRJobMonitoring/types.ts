export type TableStatus = "success" | "wfr" | "wfd";

export interface SourceTableData {
  id: string;
  name: string;
  statuses: Record<string, TableStatus>;
}

export interface WBRJobMonitoringDashboardProps {
  // Add any props if needed in the future
}
