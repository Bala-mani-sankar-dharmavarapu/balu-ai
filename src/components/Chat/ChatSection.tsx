import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  InputBase,
  useTheme,
  Fade,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Chat from "./Chat";
import { v4 as uuidv4 } from "uuid";
import QueryList from "../common/QueryList";

interface Message {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const theme = useTheme();

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
              I'm your AI assistant. How can I help you today?
            </Typography>

            {/* Quick Prompts */}
            <QueryList
              setInput={sendMessage}
              title="Quick Starters"
              functions={[
                {
                  id: "general-help",
                  title: "General Help",
                  description: "Get help with general questions and tasks",
                  example: "How can you help me today?",
                  examples: [
                    "How can you help me today?",
                    "What can you do for me?",
                    "Show me your capabilities",
                    "What are your main features?",
                  ],
                  icon: "🤖",
                  color: "primary",
                  query: "How can you help me today?",
                },
                {
                  id: "data-analysis",
                  title: "Data Analysis",
                  description: "Analyze data and create visualizations",
                  example: "Help me analyze this dataset",
                  examples: [
                    "Help me analyze this dataset",
                    "Create a visualization for this data",
                    "What insights can you find in this data?",
                    "Generate a report from this dataset",
                  ],
                  icon: "📈",
                  color: "secondary",
                  query: "Help me analyze this dataset",
                },
                {
                  id: "code-assistance",
                  title: "Code Assistance",
                  description: "Get help with programming and debugging",
                  example: "Help me debug this code",
                  examples: [
                    "Help me debug this code",
                    "Review my code for best practices",
                    "Optimize this function for better performance",
                    "Explain how this algorithm works",
                  ],
                  icon: "💻",
                  color: "info",
                  query: "Help me debug this code",
                },
                {
                  id: "documentation",
                  title: "Documentation Help",
                  description: "Get help with documentation and writing",
                  example: "Help me write documentation",
                  examples: [
                    "Help me write documentation",
                    "Create a README for my project",
                    "Write technical specifications",
                    "Generate API documentation",
                  ],
                  icon: "📚",
                  color: "warning",
                  query: "Help me write documentation",
                },
              ]}
              cardWidth={140}
            />
          </Box>
        </Fade>
      )}

      {/* Chat messages */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Chat messages={messages} loading={loading} />
      </Box>

      {/* Input section fixed at bottom */}
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Paper
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          sx={{
            p: "4px 8px",
            display: "flex",
            alignItems: "center",
            borderRadius: 3,
            maxWidth: 800,
            mx: "auto",
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
              borderColor: theme.palette.primary.main + "40",
            },
            "&:focus-within": {
              boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              fontSize: "0.95rem",
              color: theme.palette.text.primary,
              "& input::placeholder": {
                color: theme.palette.text.secondary,
                opacity: 0.7,
              },
            }}
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            multiline
            maxRows={3}
          />
          <IconButton
            color="primary"
            type="submit"
            sx={{
              p: "10px",
              backgroundColor: theme.palette.primary.main,
              color: "white",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "scale(1.05)",
              },
              "&:disabled": {
                backgroundColor: theme.palette.action.disabled,
                transform: "none",
              },
              transition: "all 0.2s ease-in-out",
            }}
            disabled={loading || !input.trim()}
          >
            <SendIcon />
          </IconButton>
        </Paper>

        {/* Status indicator */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: 1.5,
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: theme.palette.success.main,
              animation: "pulse 2s infinite",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.7rem",
            }}
          >
            AI Assistant is ready to help
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatSection;
