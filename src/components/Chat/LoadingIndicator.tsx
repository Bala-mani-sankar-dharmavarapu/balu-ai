import React from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Avatar,
  useTheme,
  Fade,
} from "@mui/material";
import { SmartToy as SmartToyIcon } from "@mui/icons-material";

const LoadingIndicator: React.FC = () => {
  const theme = useTheme();

  return (
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
  );
};

export default LoadingIndicator;
