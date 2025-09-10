import React from "react";
import { Box, Typography, Paper, Avatar, useTheme } from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import MessageContent from "./MessageContent";
import type { Message } from "./types";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
        mb: 1.5,
        gap: 1,
      }}
    >
      {/* Avatar for AI messages */}
      {message.sender === "other" && (
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0 4px 12px rgba(255, 153, 0, 0.3)",
            border: `2px solid ${theme.palette.primary.light}`,
          }}
        >
          <SmartToyIcon sx={{ fontSize: 18 }} />
        </Avatar>
      )}

      {/* Message Bubble */}
      <Paper
        sx={{
          p: 1.5,
          maxWidth: "85%", // Reasonable max width for good UX
          minWidth: "300px",
          backgroundColor:
            message.sender === "user"
              ? theme.palette.primary.main
              : theme.palette.background.paper,
          color:
            message.sender === "user" ? "white" : theme.palette.text.primary,
          borderRadius: 2,
          boxShadow:
            message.sender === "user"
              ? "0 4px 20px rgba(255, 153, 0, 0.3)"
              : "0 4px 20px rgba(0,0,0,0.08)",
          border:
            message.sender === "user"
              ? "none"
              : `1px solid ${theme.palette.divider}`,
          position: "relative",
          overflow: "visible", // Allow content to extend beyond container
          maxHeight: "500px", // Reasonable height limit for good UX
          "&::before":
            message.sender === "other"
              ? {
                  content: '""',
                  position: "absolute",
                  left: -8,
                  bottom: 12,
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderRight: `8px solid ${theme.palette.background.paper}`,
                }
              : {},
          "&::after":
            message.sender === "other"
              ? {
                  content: '""',
                  position: "absolute",
                  left: -9,
                  bottom: 12,
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderRight: `8px solid ${theme.palette.divider}`,
                }
              : {},
        }}
      >
        <MessageContent message={message} />
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 0.5,
            opacity: message.sender === "user" ? 0.8 : 0.6,
            fontSize: "0.7rem",
            textAlign: message.sender === "user" ? "right" : "left",
          }}
        >
          {message.time}
        </Typography>
      </Paper>

      {/* Avatar for user messages */}
      {message.sender === "user" && (
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: theme.palette.secondary.main,
            boxShadow: "0 4px 12px rgba(35, 47, 62, 0.3)",
            border: `2px solid ${theme.palette.secondary.light}`,
          }}
        >
          <PersonIcon sx={{ fontSize: 18 }} />
        </Avatar>
      )}
    </Box>
  );
};

export default MessageBubble;
