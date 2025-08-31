import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";

interface RCSFunction {
  id: string;
  title: string;
  description: string;
  example: string;
  icon: string;
  color: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  query: string;
}

interface QueryListProps {
  setInput: (input: string) => void;
  title?: string;
  functions?: RCSFunction[];
  cardWidth?: number;
  gap?: number;
  showDescriptions?: boolean;
}

const defaultFunctions: RCSFunction[] = [
  {
    id: "job-status",
    title: "Job Status Check",
    description: "Get live status of DataNet jobs with real-time updates",
    example: "Get me the status of jobId:2091213",
    icon: "📊",
    color: "primary",
    query: "Get me the status of jobId:2091213",
  },
  {
    id: "running-jobs",
    title: "Running Jobs Monitor",
    description:
      "Monitor all currently running DataNet jobs and their progress",
    example: "Show me all running jobs in DataNet",
    icon: "🔄",
    color: "secondary",
    query: "Show me all running jobs in DataNet",
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    description: "Analyze recent job failures and get detailed error reports",
    example: "What are the recent job failures?",
    icon: "⚠️",
    color: "error",
    query: "What are the recent job failures?",
  },
];

const QueryList: React.FC<QueryListProps> = ({
  setInput,
  title = "Available RCS Functions",
  functions = defaultFunctions,
  cardWidth = 160,
  gap = 1,
  showDescriptions = true,
}) => {
  const theme = useTheme();

  const getColorValue = (color: string) => {
    switch (color) {
      case "primary":
        return theme.palette.primary.main;
      case "secondary":
        return theme.palette.secondary.main;
      case "error":
        return theme.palette.error.main;
      case "warning":
        return theme.palette.warning.main;
      case "info":
        return theme.palette.info.main;
      case "success":
        return theme.palette.success.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ mt: 2, mb: 1.5 }}>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 1.5,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap,
          maxWidth: "100%",
          mx: "auto",
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        {functions.map((func) => {
          const colorValue = getColorValue(func.color);

          return (
            <Paper
              key={func.id}
              elevation={1}
              sx={{
                p: 1,
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.divider}`,
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
                minWidth: cardWidth,
                flexShrink: 0,
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  borderColor: colorValue + "40",
                },
              }}
              onClick={() => setInput(func.query)}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: colorValue + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: colorValue,
                      fontWeight: 600,
                      fontSize: "0.8rem",
                    }}
                  >
                    {func.icon}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  {func.title}
                </Typography>
              </Box>

              {showDescriptions && (
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 0.5,
                    lineHeight: 1.3,
                    display: "block",
                    fontSize: "0.7rem",
                  }}
                >
                  {func.description}
                </Typography>
              )}

              <Box
                sx={{
                  py: 0.5,
                  backgroundColor: theme.palette.background.default,
                  borderRadius: 0.5,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "monospace",
                    color: colorValue,
                    fontWeight: 500,
                    fontSize: "0.65rem",
                  }}
                >
                  Example: {func.example}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default QueryList;
