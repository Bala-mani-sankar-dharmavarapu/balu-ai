import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RCSFunction {
  id: string;
  title: string;
  description: string;
  example: string;
  examples: string[];
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
    examples: [
      "Get me the status of jobId:2091213",
      "Check the progress of job 12345",
      "What is the current status of my DataNet job?",
      "Show me details for job ID 98765",
    ],
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
    examples: [
      "Show me all running jobs in DataNet",
      "List all currently active jobs",
      "What jobs are currently in progress?",
      "Display all running DataNet processes",
    ],
    icon: "🔄",
    color: "secondary",
    query: "Show me all running jobs in DataNet",
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    description: "Analyze recent job failures and get detailed error reports",
    example: "What are the recent job failures?",
    examples: [
      "What are the recent job failures?",
      "Show me failed jobs from the last 24 hours",
      "Analyze the error logs for job failures",
      "List all jobs that failed today",
    ],
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
  const [selectedFunction, setSelectedFunction] = useState<RCSFunction | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

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

  const handleFunctionClick = (func: RCSFunction) => {
    setSelectedFunction(func);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedFunction(null);
  };

  const handleExampleClick = (example: string) => {
    setInput(example);
    handleDialogClose();
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
              onClick={() => handleFunctionClick(func)}
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
            </Paper>
          );
        })}
      </Box>

      {/* Dialog for showing function details and examples */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            minHeight: 400,
            maxWidth: 500,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {selectedFunction && (
              <>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor:
                      getColorValue(selectedFunction.color) + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: getColorValue(selectedFunction.color),
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {selectedFunction.icon}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {selectedFunction.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedFunction.description}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
          <IconButton onClick={handleDialogClose} size="small" sx={{ p: 0.5 }}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          {selectedFunction && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Example Queries
              </Typography>
              <List sx={{ p: 0 }}>
                {selectedFunction.examples.map((example, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 1,
                      mb: 1,
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main + "10",
                        borderColor: theme.palette.primary.main + "40",
                        transform: "translateX(4px)",
                      },
                    }}
                    onClick={() => handleExampleClick(example)}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "monospace",
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                          }}
                        >
                          {example}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </DialogContent>

        {/* <DialogActions sx={{ pt: 1 }}>
          <Button size="small" onClick={handleDialogClose} variant="outlined">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default QueryList;
