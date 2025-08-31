import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  Fade,
  CircularProgress,
  Alert,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import type { SourceTableData, TableStatus } from "./types";

const WBRJobMonitoringDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sourceTableData, setSourceTableData] = useState<SourceTableData[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const theme = useTheme();

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock data based on the image
        const mockData: SourceTableData[] = [
          {
            id: "action-spot",
            name: "Action SPOT",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "success",
              "8/9/25": "success",
              "8/10/25": "success",
              "8/11/25": "success",
              "8/12/25": "wfr",
              "8/13/25": "wfr",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
          {
            id: "order-spot",
            name: "Order SPOT",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "success",
              "8/9/25": "success",
              "8/10/25": "success",
              "8/11/25": "success",
              "8/12/25": "wfr",
              "8/13/25": "wfr",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
          {
            id: "customer-spot",
            name: "Customer SPOT",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "success",
              "8/9/25": "success",
              "8/10/25": "success",
              "8/11/25": "success",
              "8/12/25": "wfr",
              "8/13/25": "wfr",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
          {
            id: "d-cb-details",
            name: "d_cb_details",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "wfr",
              "8/9/25": "wfd",
              "8/10/25": "wfd",
              "8/11/25": "wfd",
              "8/12/25": "wfd",
              "8/13/25": "wfd",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
          {
            id: "table-y",
            name: "Table Y",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "wfr",
              "8/9/25": "wfd",
              "8/10/25": "wfd",
              "8/11/25": "wfd",
              "8/12/25": "wfd",
              "8/13/25": "wfd",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
          {
            id: "table-z",
            name: "Table Z",
            statuses: {
              "8/6/25": "success",
              "8/7/25": "success",
              "8/8/25": "wfr",
              "8/9/25": "wfd",
              "8/10/25": "wfd",
              "8/11/25": "wfd",
              "8/12/25": "wfd",
              "8/13/25": "wfd",
              "8/14/25": "wfd",
              "8/15/25": "wfd",
            },
          },
        ];

        setSourceTableData(mockData);
        setError(null);
      } catch {
        setError("Failed to load source table data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status: TableStatus) => {
    switch (status) {
      case "success":
        return theme.palette.success.main;
      case "wfr":
        return theme.palette.warning.main;
      case "wfd":
        return theme.palette.error.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusBackground = (status: TableStatus) => {
    switch (status) {
      case "success":
        return theme.palette.success.main + "15";
      case "wfr":
        return theme.palette.warning.main + "15";
      case "wfd":
        return theme.palette.error.main + "15";
      default:
        return theme.palette.grey[500] + "15";
    }
  };

  const getStatusText = (status: TableStatus) => {
    switch (status) {
      case "success":
        return "Success";
      case "wfr":
        return "WFR";
      case "wfd":
        return "WFD";
      default:
        return "Unknown";
    }
  };

  const dates = [
    "8/6/25",
    "8/7/25",
    "8/8/25",
    "8/9/25",
    "8/10/25",
    "8/11/25",
    "8/12/25",
    "8/13/25",
    "8/14/25",
    "8/15/25",
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleDownload = () => {
    // Handle download logic
    console.log("Downloading data...");
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: "400px",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ p: { xs: 1, md: 1.5 }, height: "100%", overflow: "hidden" }}>
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 1, md: 1.5 },
            mb: 1.5,
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}12)`,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* Title Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 0.5,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                Payment Risk Analytics WBR Pipeline Monitor
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Source Table Status
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Refresh data" arrow>
                <IconButton
                  onClick={handleRefresh}
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Download report" arrow>
                <IconButton
                  onClick={handleDownload}
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Paper>

        {/* Status Legend */}
        <Paper
          elevation={0}
          sx={{
            p: 1,
            mb: 1.5,
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              mb: 0.5,
              color: theme.palette.text.primary,
            }}
          >
            Status Legend
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 0.75,
                  backgroundColor: theme.palette.success.main + "15",
                  border: `2px solid ${theme.palette.success.main}`,
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Success
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 0.75,
                  backgroundColor: theme.palette.warning.main + "15",
                  border: `2px solid ${theme.palette.warning.main}`,
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                WFR (Wait for Review)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 0.75,
                  backgroundColor: theme.palette.error.main + "15",
                  border: `2px solid ${theme.palette.error.main}`,
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                WFD (Wait for Data)
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Data Table */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
            overflow: "hidden",
          }}
        >
          <TableContainer
            sx={{ maxHeight: "calc(100vh - 250px)", overflow: "auto" }}
          >
            <Table stickyHeader sx={{ minWidth: 800, "& td": { py: 0.75 } }}>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    "& th": {
                      borderBottom: `2px solid ${theme.palette.divider}`,
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: theme.palette.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      py: 0.75,
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: theme.palette.background.default,
                      zIndex: 1,
                      minWidth: 150,
                    }}
                  >
                    Source Table
                  </TableCell>
                  {dates.map((date) => (
                    <TableCell
                      key={date}
                      align="center"
                      sx={{
                        minWidth: 80,
                        fontSize: "0.7rem",
                      }}
                    >
                      {date}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sourceTableData.map((table) => (
                  <TableRow
                    key={table.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                      "&:last-child td": {
                        borderBottom: 0,
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <TableCell
                      sx={{
                        position: "sticky",
                        left: 0,
                        backgroundColor: theme.palette.background.paper,
                        zIndex: 1,
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        borderRight: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      {table.name}
                    </TableCell>
                    {dates.map((date) => (
                      <TableCell key={date} align="center" sx={{ py: 0.5 }}>
                        <Chip
                          label={getStatusText(table.statuses[date])}
                          size="small"
                          sx={{
                            backgroundColor: getStatusBackground(
                              table.statuses[date]
                            ),
                            color: getStatusColor(table.statuses[date]),
                            fontWeight: 600,
                            fontSize: "0.6rem",
                            borderRadius: 0.75,
                            minWidth: 45,
                            height: "20px",
                            border: `1px solid ${getStatusColor(
                              table.statuses[date]
                            )}30`,
                          }}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Fade>
  );
};

export default WBRJobMonitoringDashboard;
