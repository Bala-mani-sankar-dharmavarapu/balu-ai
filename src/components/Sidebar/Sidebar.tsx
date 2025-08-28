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
// import { recentChats } from "../../data/mockData";

const drawerWidth = 200;

const navigationItems = [
  { text: "Chat", icon: <Explore /> },
  { text: "Library", icon: <Collections /> },
  { text: "History", icon: <History /> },
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
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            // background: "linear-gradient(90deg, #ec4899, #a855f7)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            color: "#FFFFFF",
            fontWeight: 700,
          }}
        >
          Greymatter
        </Typography>
      </Box>
      {/* <List sx={{ px: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                
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
      </List> */}
      <List sx={{ px: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              // selected={item.selected} // <-- control selected state
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
                  // border: "1px solid rgba(255,255,255,0.8)",
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

      {/* <Divider sx={{ mx: 2, my: 2 }} /> */}
      {/* Chat history */}
      {/* <Box sx={{ px: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#666",
            fontWeight: 600,
            mb: 2,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Recent Chats
        </Typography>
        <List sx={{ p: 0 }}>
          {recentChats.map((chat) => (
            <ListItem key={chat.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "rgba(168, 85, 247, 0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={chat.title}
                  secondary={chat.timestamp}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      lineHeight: 1.3,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: "0.7rem",
                      color: "#999",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box> */}
    </Drawer>
  );
};

export default Sidebar;
