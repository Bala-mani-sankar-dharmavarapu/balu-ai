import React from "react";
import { Box, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatSection from "../components/Chat/ChatSection";
import { Routes, Route, Navigate } from "react-router-dom";
import RCSAgent from "./RCSAgent";
import CentralOEPlatform from "./CentralOEPlatform";
import WBRJobMonitoring from "./WBRJobMonitoring";
import KaleReview from "./KaleReview";

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#FAFAFA",
        // background: "linear-gradient(to right, #CBA8F5, #E6B7E1, #FBC1A8)",
        // background: "linear-gradient(to top, #993372 , #d56e72, #d4685c)",
        background: "linear-gradient(to top, #bb3187, #e68185, #f55c4b)",

        // background: "linear-gradient(to right, #1f4037, #99f2c8);", //1.Lime Pulse

        p: 1.5,
        height: "100vh",
      }}
    >
      <Sidebar />
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#FFFFFF",
          flexGrow: 1,
          width: { sm: `calc(100% - 200px)` },
          borderRadius: 2.5,
        }}
      >
        <Routes>
          <Route path="/" element={<ChatSection />} />
          <Route path="/rcs-agent" element={<RCSAgent />} />
          <Route path="/central-oe-platform" element={<CentralOEPlatform />} />
          <Route path="/wbr-monitoring" element={<WBRJobMonitoring />} />
          <Route path="/kale-review" element={<KaleReview />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Paper>
    </Box>
  );
};

export default Dashboard;
