import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Avatar,
} from "@mui/material";

interface Message {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
}

interface ChatProps {
  messages: Message[];
  loading: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, loading }) => {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages or loading changes
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: "auto",
        width: "100%",
        mb: 2,
        p: 3,
      }}
    >
      {messages.map((msg) => (
        <Box
          key={msg.id}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            mb: 1.5,
          }}
        >
          {msg.sender === "other" && (
            <Avatar
              sx={{
                width: 32,
                height: 32,
                fontSize: "0.8rem",
                mr: 1,
              }}
            >
              GM
            </Avatar>
          )}
          <Paper
            sx={{
              p: 1.5,
              maxWidth: "70%",
              backgroundColor: msg.sender === "user" ? "#fafafa" : "#fafafa",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",

              color: "#000",
              borderRadius: 3,
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="body1">{msg.text}</Typography>
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 0.5, opacity: 0.6 }}
            >
              {msg.time}
            </Typography>
          </Paper>
        </Box>
      ))}

      {loading && (
        <Box display="flex" alignItems="center" mt={1} mb={0.5}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "0.8rem",
              mr: 1,
            }}
          >
            GM
          </Avatar>
          <Paper
            sx={{
              p: 1,
              borderRadius: 3,
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <CircularProgress size={20} />
          </Paper>
        </Box>
      )}

      {/* Invisible marker for auto-scroll */}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default Chat;
export type { Message };
