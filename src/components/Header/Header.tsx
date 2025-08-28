import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Avatar,
  FormControl,
} from "@mui/material";
import { mockUser, versions } from "../../data/mockData";

const Header: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              sx={{
                "& .MuiSelect-select": {
                  fontSize: "0.9rem",
                  fontWeight: 500,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#a855f7",
                },
              }}
            >
              {versions.map((version) => (
                <MenuItem key={version} value={version}>
                  {version}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#333",
              }}
            >
              {mockUser.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#666",
                fontSize: "0.75rem",
              }}
            >
              {mockUser.email}
            </Typography>
          </Box>
          <Avatar
            src={mockUser.avatar}
            alt={mockUser.name}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#a855f7",
            }}
          >
            {mockUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
