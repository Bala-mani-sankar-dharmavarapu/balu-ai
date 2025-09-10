import React, { useState } from "react";
import { Box } from "@mui/material";
import Chat from "./Chat";
import WelcomeSection from "./WelcomeSection";
import MessageInput from "./MessageInput";
import StatusIndicator from "./StatusIndicator";
import { v4 as uuidv4 } from "uuid";
import type { Message, ApiResponse } from "./types";

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const sendMessage = (prompt = "") => {
    const query = prompt || input;
    if (!query.trim() || loading) return;
    if (!sessionId) {
      setSessionId(uuidv4());
    }
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: query,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate API call that returns both plain_text and html_text
    setTimeout(() => {
      // This simulates the API response format
      const apiResponse: ApiResponse = {
        plain_text: `Here's the transaction data you requested:
        Here's the transaction data you requested:
        Here's the transaction data you requested:
        Here's the transaction data you requested:
        `,
        html_text,
      };

      const reply: Message = {
        id: Date.now() + 1,
        sender: "other",
        text: apiResponse.plain_text, // Keep text for backward compatibility
        plain_text: apiResponse.plain_text,
        html_text: apiResponse.html_text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, reply]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Header shown only if no messages */}
      {messages.length === 0 && !loading && (
        <WelcomeSection onSendMessage={sendMessage} />
      )}

      {/* Chat messages */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Chat messages={messages} loading={loading} />
      </Box>

      {/* Input section fixed at bottom */}
      <MessageInput
        input={input}
        setInput={setInput}
        onSendMessage={sendMessage}
        loading={loading}
      />

      {/* Status indicator */}
      <StatusIndicator />
    </Box>
  );
};

export default ChatSection;

const html_text = `<style type="text/css">
#T_da5e2_row0_col0, #T_da5e2_row0_col1, #T_da5e2_row0_col2, #T_da5e2_row0_col3, #T_da5e2_row0_col4, #T_da5e2_row0_col5, #T_da5e2_row0_col6, #T_da5e2_row0_col7, #T_da5e2_row0_col8, #T_da5e2_row0_col9, #T_da5e2_row0_col10, #T_da5e2_row0_col11, #T_da5e2_row0_col12, #T_da5e2_row0_col13, #T_da5e2_row0_col14, #T_da5e2_row0_col15, #T_da5e2_row0_col16, #T_da5e2_row0_col17, #T_da5e2_row0_col18, #T_da5e2_row0_col19, #T_da5e2_row0_col20 {
 background-color: #f2f2f2;
 border: 1px solid black;
}
</style>
<table id="T_da5e2">
 <thead>
 <tr>
 <th id="T_da5e2_level0_col0" class="col_heading level0 col0" >sor</th>
 <th id="T_da5e2_level0_col1" class="col_heading level0 col1" >transaction id number</th>
 <th id="T_da5e2_level0_col2" class="col_heading level0 col2" >transaction_date</th>
 <th id="T_da5e2_level0_col3" class="col_heading level0 col3" >transaction time</th>
 <th id="T_da5e2_level0_col4" class="col_heading level0 col4" >acquirer</th>
 <th id="T_da5e2_level0_col5" class="col_heading level0 col5" >transaction category</th>
 <th id="T_da5e2_level0_col6" class="col_heading level0 col6" >transaction type</th>
 <th id="T_da5e2_level0_col7" class="col_heading level0 col7" >amount</th>
 <th id="T_da5e2_level0_col8" class="col_heading level0 col8" >transaction fee or commission</th>
 <th id="T_da5e2_level0_col9" class="col_heading level0 col9" >transaction total</th>
 <th id="T_da5e2_level0_col10" class="col_heading level0 col10" >sender_name</th>
 <th id="T_da5e2_level0_col11" class="col_heading level0 col11" >sender_address</th>
 <th id="T_da5e2_level0_col12" class="col_heading level0 col12" >sender_city_state</th>
 <th id="T_da5e2_level0_col13" class="col_heading level0 col13" >sender_telephone</th>
 <th id="T_da5e2_level0_col14" class="col_heading level0 col14" >recepient_name</th>
 <th id="T_da5e2_level0_col15" class="col_heading level0 col15" >recepient_address</th>
 <th id="T_da5e2_level0_col16" class="col_heading level0 col16" >recepient_city_state</th>
 <th id="T_da5e2_level0_col17" class="col_heading level0 col17" >recepient_telephone</th>
 <th id="T_da5e2_level0_col18" class="col_heading level0 col18" >location of transaction</th>
 <th id="T_da5e2_level0_col19" class="col_heading level0 col19" >agent's name</th>
 <th id="T_da5e2_level0_col20" class="col_heading level0 col20" >agent's address</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr><tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 <tr>
 <td id="T_da5e2_row0_col0" class="data row0 col0" >NY</td>
 <td id="T_da5e2_row0_col1" class="data row0 col1" >Escheatment</td>
 <td id="T_da5e2_row0_col2" class="data row0 col2" >2024-08-29</td>
 <td id="T_da5e2_row0_col3" class="data row0 col3" >2024-08-29 23:36:32</td>
 <td id="T_da5e2_row0_col4" class="data row0 col4" >BalanceAdj</td>
 <td id="T_da5e2_row0_col5" class="data row0 col5" >Escheatment</td>
 <td id="T_da5e2_row0_col6" class="data row0 col6" >Debit</td>
 <td id="T_da5e2_row0_col7" class="data row0 col7" >-1100.000000</td>
 <td id="T_da5e2_row0_col8" class="data row0 col8" >0</td>
 <td id="T_da5e2_row0_col9" class="data row0 col9" >-1100.000000</td>
 <td id="T_da5e2_row0_col10" class="data row0 col10" >None</td>
 <td id="T_da5e2_row0_col11" class="data row0 col11" > </td>
 <td id="T_da5e2_row0_col12" class="data row0 col12" >BROOKLYN NY</td>
 <td id="T_da5e2_row0_col13" class="data row0 col13" >None</td>
 <td id="T_da5e2_row0_col14" class="data row0 col14" >Amazon.com</td>
 <td id="T_da5e2_row0_col15" class="data row0 col15" >410 Terry Ave N. SEATTLE WA</td>
 <td id="T_da5e2_row0_col16" class="data row0 col16" >SEATTLE WA</td>
 <td id="T_da5e2_row0_col17" class="data row0 col17" >2062661000</td>
 <td id="T_da5e2_row0_col18" class="data row0 col18" >Internet</td>
 <td id="T_da5e2_row0_col19" class="data row0 col19" >None</td>
 <td id="T_da5e2_row0_col20" class="data row0 col20" >None</td>
 </tr>
 </tbody>
</table>`;
