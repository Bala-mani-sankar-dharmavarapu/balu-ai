export interface Message {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
  plain_text?: string;
  html_text?: string;
}

export interface ApiResponse {
  plain_text: string;
  html_text: string;
}

export interface AgentResponse {
  simple_agent_response?: string;
  function_call?: string;
  function_response?: {
    sql_query?: string;
    analysis?: string;
    plain_text?: string;
    html_response?: string;
  };
}
