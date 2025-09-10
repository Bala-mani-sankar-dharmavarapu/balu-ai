import React, { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import MessageBubble from "./MessageBubble";
import LoadingIndicator from "./LoadingIndicator";
import type { Message } from "./types";

interface ChatProps {
  messages: Message[];
  loading: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, loading }) => {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

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
        overflowX: "auto", // Enable horizontal scrolling for wide content
        width: "100%",
        p: 2,
        "&::-webkit-scrollbar": {
          width: 6,
          height: 6, // Add height for horizontal scrollbar
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.background.default,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.divider,
          borderRadius: 3,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.palette.text.secondary,
        },
      }}
    >
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {/* Loading indicator */}
      {loading && <LoadingIndicator />}

      {/* Invisible marker for auto-scroll */}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default Chat;
