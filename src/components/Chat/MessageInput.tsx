import React from "react";
import { Box, Paper, IconButton, InputBase, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  onSendMessage: () => void;
  loading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  onSendMessage,
  loading,
}) => {
  const theme = useTheme();

  return (
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
          onSendMessage();
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
    </Box>
  );
};

export default MessageInput;
