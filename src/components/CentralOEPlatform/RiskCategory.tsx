import React from "react";
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
  Button,
  Chip,
  Avatar,
  useTheme,
  Tooltip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import type { RiskCategoryProps } from "./types";

const RiskCategory: React.FC<RiskCategoryProps> = ({ category, onNotify }) => {
  const theme = useTheme();

  const getScoreColor = (score: number) => {
    if (score >= 80) return theme.palette.success.main;
    if (score >= 60) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  const getDueInColor = (dueIn: number) => {
    if (dueIn <= 7) return theme.palette.error.main;
    if (dueIn <= 14) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return theme.palette.success.main;
      case "completed":
        return theme.palette.info.main;
      case "overdue":
        return theme.palette.error.main;
      case "pending":
        return theme.palette.warning.main;
      default:
        return theme.palette.grey[500];
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Category Header */}
      <Box
        sx={{
          p: { xs: 1, md: 1.5 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}12)`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(8px)",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              {category.name}
            </Typography>
            <Chip
              label={`${category.percentage}%`}
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.main + "20",
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: "0.7rem",
                borderRadius: 1.5,
                height: "20px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
              }}
            >
              Score:
            </Typography>
            <Chip
              label={category.score}
              size="small"
              sx={{
                backgroundColor: getScoreColor(category.score) + "20",
                color: getScoreColor(category.score),
                fontWeight: 700,
                fontSize: "0.7rem",
                borderRadius: 1.5,
                height: "20px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer sx={{ maxWidth: "100%", overflow: "hidden", pr: 1 }}>
        <Table
          sx={{
            minWidth: 650,
            "& td": { py: 1 },
            tableLayout: "fixed",
            width: "100%",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: theme.palette.background.default,
                "& th": {
                  borderBottom: `2px solid ${theme.palette.divider}`,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: theme.palette.text.secondary,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  py: 1,
                },
              }}
            >
              <TableCell width="35%">Item</TableCell>
              <TableCell width="20%">Owner</TableCell>
              <TableCell width="20%">Assignee</TableCell>
              <TableCell width="15%">Due in</TableCell>
              <TableCell width="10%">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.items.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                    transform: "scale(1.01)",
                  },
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <TableCell>
                  <Tooltip title="Click to open in new tab" arrow>
                    <Typography
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        "&:hover": {
                          textDecoration: "underline",
                          color: theme.palette.primary.dark,
                          transform: "translateX(2px)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 0.5,
                      borderRadius: 1.5,
                      backgroundColor: theme.palette.primary.main + "08",
                      border: `1px solid ${theme.palette.primary.main}20`,
                      width: "100%",
                      maxWidth: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        color: "white",
                        boxShadow: `0 2px 4px ${theme.palette.primary.main}30`,
                      }}
                    >
                      {item.owner.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        letterSpacing: "0.3px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      {item.owner}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 0.5,
                      borderRadius: 1.5,
                      backgroundColor: getStatusColor(item.status) + "08",
                      border: `1px solid ${getStatusColor(item.status)}20`,
                      width: "100%",
                      maxWidth: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${getStatusColor(
                          item.status
                        )}, ${getStatusColor(item.status)}dd)`,
                        color: "white",
                        boxShadow: `0 2px 4px ${getStatusColor(item.status)}30`,
                      }}
                    >
                      {item.assignee.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        letterSpacing: "0.3px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      {item.assignee}
                    </Typography>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(item.status),
                        boxShadow: `0 1px 3px ${getStatusColor(item.status)}50`,
                        border: `1px solid ${theme.palette.background.paper}`,
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={`${item.dueIn} days`}
                    size="small"
                    sx={{
                      backgroundColor: getDueInColor(item.dueIn) + "20",
                      color: getDueInColor(item.dueIn),
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      borderRadius: 1.5,
                      height: "18px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Send notification" arrow>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={
                        <NotificationsIcon sx={{ fontSize: "0.9rem" }} />
                      }
                      onClick={() => onNotify(item.id)}
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
                        color: "white",
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        px: 1.5,
                        py: 0.5,
                        minWidth: "auto",
                        textTransform: "none",
                        "&:hover": {
                          background: `linear-gradient(135deg, ${theme.palette.warning.dark}, ${theme.palette.warning.main})`,
                          transform: "translateY(-1px) scale(1.02)",
                        },
                        "&:active": {
                          transform: "translateY(0) scale(0.98)",
                        },
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      Notify
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RiskCategory;
