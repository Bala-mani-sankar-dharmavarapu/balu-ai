import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  useTheme,
  Avatar,
  Chip,
} from "@mui/material";
import {
  Chat as ChatIcon,
  SmartToy as RCSIcon,
  Dashboard as DashboardIcon,
  Monitor as MonitorIcon,
  RateReview as ReviewIcon,
  Bolt as BoltIcon,
} from "@mui/icons-material";
import Logo from "../../assets/logo_128x128.png";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const navigationItems = [
  {
    text: "DE Chat Assistant",
    icon: <ChatIcon />,
    path: "/",
    description: "Intelligent conversation",
    badge: "New",
  },
  {
    text: "RCS Agent",
    icon: <RCSIcon />,
    path: "/rcs-agent",
    description: "Robotic control system",
  },
  {
    text: "Central OE Platform",
    icon: <DashboardIcon />,
    path: "/central-oe-platform",
    description: "Operations excellence",
  },
  {
    text: "WBR Monitoring",
    icon: <MonitorIcon />,
    path: "/wbr-monitoring",
    description: "Workflow monitoring",
  },
  {
    text: "Kale Review",
    icon: <ReviewIcon />,
    path: "/kale-review",
    description: "Performance analytics",
  },
];

interface SidebarProps {
  open?: boolean;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          pb: 1.5,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 1.5,
          }}
        >
          <Avatar
            src={Logo}
            alt="Greymatter Logo"
            sx={{
              width: 40,
              height: 40,
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: "0 4px 12px rgba(255, 153, 0, 0.3)",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: "1.125rem",
              }}
            >
              Greymatter
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: "0.7rem",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <BoltIcon sx={{ fontSize: "0.75rem" }} />
              Powered by Aquila
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ p: 1.5, flexGrow: 1, overflow: "auto" }}>
        <Typography
          variant="overline"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 600,
            fontSize: "0.7rem",
            mb: 1.5,
            display: "block",
          }}
        >
          NAVIGATION
        </Typography>

        <List sx={{ p: 0 }}>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 1.5,
                  transition: "all 0.2s ease-in-out",
                  p: 1.5,
                  minHeight: 48,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main + "10",
                    transform: "translateX(4px)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main + "15",
                    border: `1px solid ${theme.palette.primary.main}30`,
                    boxShadow: "0 4px 12px rgba(255, 153, 0, 0.2)",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main + "20",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    minWidth: 36,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight:
                            location.pathname === item.path ? 600 : 500,
                          color:
                            location.pathname === item.path
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                          fontSize: "0.875rem",
                        }}
                      >
                        {item.text}
                      </Typography>
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            height: 18,
                            fontSize: "0.6rem",
                            backgroundColor: theme.palette.error.main,
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Box>
                  }
                  secondary={
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.7rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.description}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          textAlign: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Powered by Enterprise Platform
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
