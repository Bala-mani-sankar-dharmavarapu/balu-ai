import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Avatar,
  useTheme,
  Fade,
  // Slide,
} from "@mui/material";
import {
  SmartToy as SmartToyIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

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
        width: "100%",
        p: 2,
        "&::-webkit-scrollbar": {
          width: 6,
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
        // <Slide
        //   direction={msg.sender === "user" ? "left" : "right"}
        //   in={true}
        //   timeout={300}
        //   key={msg.id}
        // >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            mb: 1.5,
            gap: 1,
          }}
        >
          {/* Avatar for AI messages */}
          {msg.sender === "other" && (
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
              maxWidth: "70%",
              backgroundColor:
                msg.sender === "user"
                  ? theme.palette.primary.main
                  : theme.palette.background.paper,
              color:
                msg.sender === "user" ? "white" : theme.palette.text.primary,
              borderRadius: 2,
              boxShadow:
                msg.sender === "user"
                  ? "0 4px 20px rgba(255, 153, 0, 0.3)"
                  : "0 4px 20px rgba(0,0,0,0.08)",
              border:
                msg.sender === "user"
                  ? "none"
                  : `1px solid ${theme.palette.divider}`,
              position: "relative",
              "&::before":
                msg.sender === "other"
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
                msg.sender === "other"
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
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                lineHeight: 1.4,
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 0.5,
                opacity: msg.sender === "user" ? 0.8 : 0.6,
                fontSize: "0.7rem",
                textAlign: msg.sender === "user" ? "right" : "left",
              }}
            >
              {msg.time}
            </Typography>
          </Paper>

          {/* Avatar for user messages */}
          {msg.sender === "user" && (
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
        //</Slide>
      ))}

      {/* Loading indicator */}
      {loading && (
        <Fade in={true} timeout={300}>
          <Box display="flex" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
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
            <Paper
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircularProgress
                size={14}
                sx={{
                  color: theme.palette.primary.main,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.8rem",
                }}
              >
                AI is thinking...
              </Typography>
            </Paper>
          </Box>
        </Fade>
      )}

      {/* Invisible marker for auto-scroll */}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default Chat;
export type { Message };
