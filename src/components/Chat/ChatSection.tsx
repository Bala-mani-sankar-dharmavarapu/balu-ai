import React, { useState } from "react";
import { Box, Typography, Paper, IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Chat from "./Chat";
import { v4 as uuidv4 } from "uuid";
import Prompts from "./Prompts";

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

  const sendMessage = (prompt = "") => {
    const query = prompt || input;
    if (!query.trim() || loading) return; // Prevent sending while loading
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
        text: "This is a dummy reply for testing UI.",
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
        pb: 3,
      }}
    >
      {/* Header shown only if no messages */}
      {messages.length === 0 && !loading && (
        <Box textAlign="center" mt={4}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(to right,#bb3187, #e68185, #f55c4b);",
              // background: "linear-gradient(to right, #1f4037, #99f2c8);",
              // background: "linear-gradient(90deg, #ec4899, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            Hello Sriram
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#9e9e9e", fontWeight: 500, mb: 4 }}
          >
            How can I help you today?
          </Typography>
          <Prompts sendMessage={sendMessage} />
        </Box>
      )}

      {/* Chat messages */}
      <Chat messages={messages} loading={loading} />

      {/* Input section fixed at bottom */}
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        sx={{
          p: "2px 6px",
          display: "flex",
          alignItems: "center",
          borderRadius: 5,
          maxWidth: 600,
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading} // Prevent typing while waiting for reply
        />
        <IconButton
          color="primary"
          type="submit"
          sx={{ p: "10px" }}
          disabled={loading || !input.trim()} // Disable while loading or input empty
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatSection;
