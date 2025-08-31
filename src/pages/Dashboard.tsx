import React from "react";
import { Box, Paper, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatSection from "../components/Chat/ChatSection";
import { Routes, Route, Navigate } from "react-router-dom";
import RCSAgent from "./RCSAgent";
import CentralOEPlatform from "./CentralOEPlatform";
import WBRJobMonitoring from "./WBRJobMonitoring";
import KaleReview from "./KaleReview";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}10 100%)`,
          zIndex: 0,
        }}
      />

      {/* Sidebar */}
      <Box sx={{ zIndex: 1, position: "relative" }}>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 1.5, md: 2 },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              height: "100%",
              overflow: "auto",
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.95)",
            }}
          >
            <Routes>
              <Route path="/" element={<ChatSection />} />
              <Route path="/rcs-agent" element={<RCSAgent />} />
              <Route
                path="/central-oe-platform"
                element={<CentralOEPlatform />}
              />
              <Route path="/wbr-monitoring" element={<WBRJobMonitoring />} />
              <Route path="/kale-review" element={<KaleReview />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
