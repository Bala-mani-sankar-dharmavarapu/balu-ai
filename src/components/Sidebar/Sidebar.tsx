import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { Explore, Collections, History } from "@mui/icons-material";
import Logo from "../../assets/logo_128x128.png";

const drawerWidth = 200;

const navigationItems = [
  { text: "Chat Agent", icon: <Explore /> },
  { text: "RCS Agent", icon: <History /> },
  { text: "Central OE Platform", icon: <Collections /> },
  { text: "WBR Monitoring", icon: <History /> },
  { text: "Kale Review", icon: <History /> },
];

interface SidebarProps {
  open?: boolean;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: 0,
          background: "none",
        },
      }}
    >
      {/* Logo + Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 2,
          pb: 0,
        }}
      >
        <img
          src={Logo}
          alt="Greymatter Logo"
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
          }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Greymatter
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "10px",
            }}
          >
            Powered By Aquila
          </Typography>
        </Box>
      </Box>

      {/* Navigation */}
      <List sx={{ px: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                },
                "&.Mui-selected": {
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
