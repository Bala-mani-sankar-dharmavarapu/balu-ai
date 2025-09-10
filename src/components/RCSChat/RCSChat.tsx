import React, { useState } from "react";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Chat from "../Chat/Chat";
import MessageInput from "../Chat/MessageInput";
import StatusIndicator from "../Chat/StatusIndicator";
import QueryList from "../common/QueryList";
import type { AgentResponse, Message } from "../Chat/types";

// RCS-specific welcome section component
const RCSWelcomeSection: React.FC<{
  onSendMessage: (message: string) => void;
}> = ({ onSendMessage }) => {
  const theme = useTheme();

  // Define response type

  // Format function
  const formatResponse = (
    response: AgentResponse
  ): { plain_text: string; html_text: string } => {
    let plain_text = "";
    let html_text = "";

    if (!response.function_call) {
      plain_text = response.simple_agent_response || "";
    } else {
      plain_text =
        response.function_response?.sql_query ||
        response.function_response?.analysis ||
        "";

      html_text = response.function_response?.html_response || "";
      plain_text = response.function_response?.plain_text || plain_text;
    }

    return { plain_text, html_text };
  };

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          px: 2,
          maxWidth: 600,
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Welcome Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
            fontSize: { xs: "1.75rem", md: "2rem" },
          }}
        >
          Hello Sriram! 👋
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            mb: 2.5,
            fontSize: "1rem",
            lineHeight: 1.4,
          }}
        >
          I'm your RCS assistant. How can I help you today?
        </Typography>

        {/* RCS Query Functionalities Section */}
        <QueryList setInput={onSendMessage} />
      </Box>
    </Fade>
  );
};

const RCSChat: React.FC = () => {
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

    // Simulate dummy reply
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        sender: "other",
        text: "This is a dummy reply for testing the modern UI. I'm here to help you with any questions or tasks you might have!",
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
        <RCSWelcomeSection onSendMessage={sendMessage} />
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

export default RCSChat;
