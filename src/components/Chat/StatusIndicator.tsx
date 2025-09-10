import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StatusIndicator: React.FC = () => {
  const theme = useTheme();

  return (
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
  );
};

export default StatusIndicator;
