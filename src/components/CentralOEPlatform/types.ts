export type ViewMode = "weekly" | "monthly";

export interface RiskItem {
  id: string;
  title: string;
  owner: string;
  assignee: string;
  dueIn: number;
  link: string;
  status: "active" | "completed" | "overdue" | "pending";
  selected?: boolean;
}

export interface RiskData {
  id: string;
  name: string;
  percentage: number;
  score: number;
  items: RiskItem[];
}

export interface RiskCategoryProps {
  category: RiskData;
  onNotify: (itemId: string) => void;
}
